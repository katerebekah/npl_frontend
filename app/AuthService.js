(function(){
    angular.module('npl').factory('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', 'localStorageService', 'ngAuthSettings'];

    function AuthService($http, $q, localStorageService, ngAuthSettings){
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var auth = {
            isAuthenticated: false,
            userName: "",
            useRefreshTokens: false
        };

        var externalAuthData = {
            provider: "",
            userName: "",
            externalAccessToken: ""
        };


        var Login = function(loginData){
            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
            
            if (auth.useRefreshTokens) {
                data = data + "&client_id=" + ngAuthSettings.clientId;
            }

            var deferred = $q.defer();
            
            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {
                if (loginData.useRefreshTokens) {
                    localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
                }
                else {
                    localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: "", useRefreshTokens: false });
                }
                auth.isAuthenticated = true;
                auth.userName = loginData.userName;
                auth.useRefreshTokens = loginData.useRefreshTokens;

                deferred.resolve(response);
            }).error(function (err, status) {
                Logout();
                deferred.reject(err);
            });
            return deferred.promise;
        }

        var Logout = function(){
            localStorageService.remove('authorizationData');
            auth.isAuthenticated = false;
            auth.userName = "";
            auth.useRefreshTokens = false;
        }

        var Register = function(registration){
            Logout();
            return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
                return response;
            });
        }

        var GetUserAuth = function(){
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                auth.isAuthenticated = true;
                auth.userName = authData.userName;
                auth.useRefreshTokens = authData.useRefreshTokens;
            }
        }

        var refreshToken = function () {
            var deferred = $q.defer();

            var authData = localStorageService.get('authorizationData');

            if (authData) {

                if (authData.useRefreshTokens) {

                    var data = "grant_type=refresh_token&refresh_token=" + authData.refreshToken + "&client_id=" + ngAuthSettings.clientId;

                    localStorageService.remove('authorizationData');

                    $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                        localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: response.refresh_token, useRefreshTokens: true });

                        deferred.resolve(response);

                    }).error(function (err, status) {
                        _logOut();
                        deferred.reject(err);
                    });
                }
            }

            return deferred.promise;
        };

        var obtainAccessToken = function (externalData) {

            var deferred = $q.defer();

            $http.get(serviceBase + 'api/account/ObtainLocalAccessToken', { params: { provider: externalData.provider, externalAccessToken: externalData.externalAccessToken } }).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: "", useRefreshTokens: false });

                auth.isAuthenticated = true;
                auth.userName = response.userName;
                auth.useRefreshTokens = false;

                deferred.resolve(response);

            }).error(function (err, status) {
                Logout();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        var registerExternal = function (registerExternalData) {

            var deferred = $q.defer();

            $http.post(serviceBase + 'api/account/registerexternal', registerExternalData).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: "", useRefreshTokens: false });

                auth.isAuthenticated = true;
                auth.userName = response.userName;
                auth.useRefreshTokens = false;

                deferred.resolve(response);

            }).error(function (err, status) {
                Logout();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        return {
            Register: Register,
            Login: Login,
            Logout: Logout,
            GetUserAuth: GetUserAuth,
            UserAuth: auth,
            RefreshToken: refreshToken,
            ObtainAccessToken: obtainAccessToken,
            RegisterExternal: registerExternal,
            ExternalAuthData: externalAuthData
        }
    }
})();
