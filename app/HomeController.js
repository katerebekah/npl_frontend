(function(){
    angular.module('npl').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope){
        var viewModel = this;

        viewModel.openClientForm = function(){

        }

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


    }

})();