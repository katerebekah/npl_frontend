(function(){
    angular.module('npl').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'DashboardService'];

    function HomeController($scope, DashboardService){
        var viewModel = this;

        //Load Services for form
        viewModel.services = [];
        $('select').material_select();
        viewModel.getAllServices = function(){
            DashboardService.GetAllServices().then(function(response){
                console.log(response.data);
                viewModel.services = response.data;
            })   
        }
        viewModel.getAllServices();

        //Confirmation message
        viewModel.success = false;
        viewModel.successMessage = "Thanks for signing up for services."

        //client form modal
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
            servicesRequested: []
        }

        viewModel.clearForm = function(){
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
                servicesRequested: []
            }

        }

        viewModel.toggleService= function(service){
            if (viewModel.clientForm.servicesRequested.indexOfObject(service) > 0){
                viewModel.clientForm.servicesRequested.splice(servicesRequested.indexOfObject(service), 1);
            }
            else{
                viewModel.clientForm.servicesRequested.push(service);
            }
        }

        viewModel.isSelected = function(id){
            return viewModel.clientForm.servicesRequested.indexOfObject(id) > 0;
        }

        //active slides in modal
        viewModel.active = 1;
        viewModel.changeSlide = function(slideNumber){
            viewModel.active = slideNumber;
        }

        //Open Exit and Sumbit form from modal
        viewModel.openClientForm = function(){
            $('#clientFormModal').openModal();
        }
        viewModel.exit = function(){
            viewModel.clearForm();
            viewModel.active = 1;
            $('#clientFormModal').closeModal();
        }
        viewModel.submit = function(){
            DashboardService.AddClient(viewModel.clientForm).then(function(response){
                $('#clientFormModal').closeModal();
                viewModel.clearForm();
                viewModel.active = 1;
                viewModel.success = true;
            });
        }



    }

})();
