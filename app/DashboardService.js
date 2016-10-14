(function(){
    angular.module('npl').factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', '$q', 'ngAuthSettings'];

    function DashboardService($http, $q, ngAuthSettings){
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var GetAllClients = function(){
             var deferred = $q.defer();
             $http.get(serviceBase + '/client').then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
             });
             return deferred.promise;             
        }

        var GetAllReferrals = function(){
             var deferred = $q.defer();
             $http.get(serviceBase + '/referral').then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
             });
             return deferred.promise;    
        }

        return{}
    }

})();