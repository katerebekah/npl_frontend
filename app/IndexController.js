(function(){
    angular.module('npl').controller('IndexController', IndexController);
    
    IndexController.$injector = ['$scope', 'AuthService'];

    function IndexController($scope, AuthService){
        var viewModel = this;

        var user = AuthService.User;
        
    }

})();