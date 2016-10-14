(function(){
    angular.module('npl').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', '$timeout', 'AuthService'];

    function LoginController($scope, $location, $timeout, AuthService){
        var viewModel = this;

        viewModel.message = "";
        
        viewModel.registration = {
            email: "",
            password: "",
            confirmPassword: ""
        };

        viewModel.loginData = {
            userName: "",
            password: ""
        };

        viewModel.Register = function(){
            AuthService.Register(viewModel.registration).then(function (response) {

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
 
            AuthService.Login(viewModel.loginData).then(function (response) {
                console.log(response);
                $location.path('/dashboard');    
            },
            function (err) {
                viewModel.message = err.error_description;
            });
        };

        viewModel.showRegister = true;
    }

})();