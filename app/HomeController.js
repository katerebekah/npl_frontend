(function(){
    angular.module('npl').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'DashboardService'];

    function HomeController($scope, DashboardService){
        var viewModel = this;

        viewModel.openClientForm = function(){
            $('#clientFormModal').openModal();
        }
        viewModel.success = false;
        viewModel.successMessage = "Thanks for signing up for services."

        viewModel.clientForm = {
            firstName: "",
            lastName: "",
            areaCode: "",
            phoneNumber: "",
            areaCode2: "",
            phoneNumber2: "",
            emailAddress: "",
            streetName: "",
            houseNumber: "",
            zipCode: "",
            notes: "",
            serviceIdsRequested: ""
        }

        viewModel.exit = function(){
            $('#clientFormModal').closeModal();
        }
        viewModel.submit = function(){
            DashboardService.AddClient(viewModel.clientForm).then(function(response){
                $('#clientFormModal').closeModal();
                viewModel.success = true;
            });
        }



    }

})();