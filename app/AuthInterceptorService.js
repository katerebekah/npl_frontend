(function(){
    angular.module('npl').factory('AuthInterceptorService', AuthInterceptorService);
    AuthInterceptorService.$inject = ['$q', '$injector', '$location', 'localStorageService'];

    function AuthInterceptorService($q, $injector, $location, localStorageService){
        var request = function (config) {
            config.headers = config.headers || {};
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }
            return config;
        }

        var responseError = function (rejection) {
            if (rejection.status === 401) {
                var authService = $injector.get('AuthService');
                var authData = localStorageService.get('authorizationData');

                if (authData) {
                    if (authData.useRefreshTokens) {
                        $location.path('/refresh');
                        return $q.reject(rejection);
                    }
                }
                authService.Logout();
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        return {
            Request: request,
            ResponseError: responseError
        }
    }


})();