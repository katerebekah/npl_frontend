(function(){
    angular.module('npl').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', '$timeout', 'authService'];

    function LoginController($scope, $location, $timeout, authService){
        var viewModel = this;

        viewModel.message = "";
        
        viewModel.registration = {
            Email: "",
            Password: ""
        }

        viewModel.Register = function(){
            authService.register(viewModel.registration).then(function (response) {

                viewModel.savedSuccessfully = true;
                viewModel.message = "Registration successful. Logging you in now...";
                viewModel.Login();
            },
            function (response) {
                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                viewModel.message = "Failed to register user due to:" + errors.join(' ');
            });
        }



        viewModel.Login = function(){
 
            authService.Login(viewModel.registration).then(function (response) {
                $location.path('/dashboard');    
            },
            function (err) {
                viewModel.message = err.error_description;
            });
        };

        viewModel.showRegister = true;
    }

})();