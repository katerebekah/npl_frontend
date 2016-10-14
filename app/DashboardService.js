(function(){
    angular.module('npl').factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', '$q', 'ngAuthSettings'];

    function DashboardService($http, $q, ngAuthSettings){
        var serviceBase = ngAuthSettings.apiServiceBaseUri;

        var DeleteAgency = function(id){
            var deferred = $q.defer();
            $http.delete(serviceBase + '/agency/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var UpdateAgency = function(agency){
            var deferred = $q.defer();
            $http.put(serviceBase + 'agency', agency).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var AddAgency = function(agency){
            var deferred = $q.defer();
            $http.post(serviceBase + 'agency', agency).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var GetAgencyById = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/agency/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var DeleteEmployee = function(id){
            var deferred = $q.defer();
            $http.delete(serviceBase + '/employee/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var UpdateEmployee = function(employee){
            var deferred = $q.defer();
            $http.put(serviceBase + 'employee', employee).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var AddEmployee = function(employee){
            var deferred = $q.defer();
            $http.post(serviceBase + 'employee', employee).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var GetEmployeeById = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/employee/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var DeleteService = function(id){
            var deferred = $q.defer();
            $http.delete(serviceBase + '/service/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var UpdateService = function(service){
            var deferred = $q.defer();
            $http.put(serviceBase + 'service', service).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var AddService = function(service){
            var deferred = $q.defer();
            $http.post(serviceBase + 'service', referral).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var GetServiceById = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/service/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var DeleteReferrel = function(id){
            var deferred = $q.defer();
            $http.delete(serviceBase + '/referral/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var UpdateReferrel = function(referral){
            var deferred = $q.defer();
            $http.put(serviceBase + 'referral', referral).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var AddReferrel = function(referral){
            var deferred = $q.defer();
            $http.post(serviceBase + 'referral', referral).then(function(response){
            deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var GetReferralByClientId = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/referral/client/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
        }

        var GetReferralById = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/referral/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }

        var DeleteClient = function(id){
            var deferred = $q.defer();
            $http.delete(serviceBase + '/client/' + id).then(function(response){
                deferred.resolve(response);
            }, function(err){
            deferred.reject(err);
            });
            return deferred.promise;
        }

        var UpdateClient = function(client){
            var deferred = $q.defer();
            $http.put(serviceBase + 'client', client).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            });
            return deferred.promise;
        }

        var AddClient = function(client){
            var deferred = $q.defer();
            $http.post(serviceBase + 'client', client).then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
            });
            return deferred.promise;
        }

        var GetClientById = function(id){
            var deferred = $q.defer();
            $http.get(serviceBase + '/client/'+ id).then(function(response){
                deffered.resolve(response);
            }, function(err){
                 deferred.reject(err);
            });
            return deferred.promise;
        }

        var GetClientByEmail = function(email){
            var deferred = $q.defer();
            $http.get(serviceBase + '/client/' + email).then(function(response){
                deferred.resolve(response);
            }, function(err){
                deferred.reject(err);
            
            });
            return deferred.promise;
        }
        
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

        var GetAllClients = function(){
             var deferred = $q.defer();
             $http.get(serviceBase + '/client').then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
             });
             return deferred.promise;    
        }
        
        var GetAllEmployees = function(){
             var deferred = $q.defer();
             $http.get(serviceBase + '/employee').then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
             });
             return deferred.promise;    
        }

        var GetAllServices = function(){
             var deferred = $q.defer();
             $http.get(serviceBase + '/service').then(function(response){
                deferred.resolve(response);
             }, function(err){
                 deferred.reject(err);
             });
             return deferred.promise;    
        }

        return{
            GetAllClients: GetAllClients,
            GetAllEmployees: GetAllEmployees,
            GetAllReferrals: GetAllReferrals,
            GetAllServices: GetAllServices,
            DeleteAgency: DeleteAgency,
            DeleteClient: DeleteClient,
            DeleteEmployee: DeleteEmployee,
            DeleteReferral: DeleteReferrel,
            DeleteService: DeleteService,
            UpdateClient: UpdateClient,
            UpdateEmployee: UpdateEmployee,
            UpdateReferral: UpdateReferrel,
            UpdateService: UpdateService, 
            UpdateAgency: UpdateAgency,
            AddAgency: AddAgency,
            AddClient: AddClient,
            AddEmployee: AddEmployee,
            AddReferral: AddReferrel,
            AddService: AddService,
            GetAgencyById: GetAgencyById,
            GetClientByEmail: GetClientByEmail,
            GetClientById: GetClientById,
            GetEmployeeById: GetEmployeeById,
            GetReferralByClientId: GetReferralByClientId,
            GetReferralById: GetReferralById,
            GetServiceById: GetServiceById
        }
    }

})();