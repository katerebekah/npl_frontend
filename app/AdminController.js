(function(){
    angular.module('npl').controller('AdminController', AdminController);

    AdminController.$injector = ['$scope', 'AuthService'];

    function AdminController($scope, AuthService){
        var viewModel = this;

        viewModel.user = AuthService.UserAuth;

        viewModel.requests = [];

        viewModel.approve = function(request){
            
        }
        
        viewModel.deny = function(request){
            
        }

    }
})();