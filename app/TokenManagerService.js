(function(){
    angular.module('npl').factory('TokenManagerService', TokenManagerService);
    TokenManagerService.$inject = ['$http','ngAuthSettings'];
    
    function TokenManagerService ($http,ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var GetRefreshTokens = function () {

            return $http.get(serviceBase + 'api/refreshtokens').then(function (results) {
                return results;
            });
        };

        var DeleteRefreshTokens = function (tokenid) {

            return $http.delete(serviceBase + 'api/refreshtokens/?tokenid=' + tokenid).then(function (results) {
                return results;
            });
        };

        return {
            DeleteRefreshTokens: DeleteRefreshTokens,
            GetRefreshTokens: GetRefreshTokens
        }

    }
})();