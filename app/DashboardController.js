(function(){
    angular.module('npl').controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'DashboardService'];

    function DashboardController($scope, DashboardService){
        var viewModel = this;

        $scope.clients = [];
        $scope.ReferralCounts = {};
        $scope.currentReferral;
        $scope.referralProgressOrComplete = "progress";
        $scope.getAllClients = function(){
            DashboardService.GetAllClients()
                .then(function(response){
                    $scope.clients = response.data;
                    console.log($scope.clients);
                })
        }
        $scope.getAllClients();
        

        $scope.openConfirm = function(referral){
            if(!referral.ServiceInProgress && !referral.ServiceRendered){
                $scope.referralProgressOrComplete = "progress";
                $scope.currentReferral = referral;
            } else if( referral.ServiceInProgress && !referral.DateServiceRendered) {
                $scope.referralProgressOrComplete = "complete";
                $scope.currentReferral = referral;
            } else {
                $scope.referral = {};
            }
            
        }

        $scope.confirmReferral = function(){
            var submitReferral = $scope.currentReferral;
            DashboardService.UpdateReferrel(submitReferral);
            $scope.currentReferral = {};
        }
    }
})();