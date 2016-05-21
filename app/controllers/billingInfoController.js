
(function() {

    var billingInfoController = function($scope, $location, $route, formsAppService) {
        $scope.user = {};
        $scope.data = formsAppService.getSteps();

        // if user has previously entered any data, bind that data to the form model.
        for(var i= 0, len=$scope.data.length; i< len; i++) {
            if($scope.data[i].name === 'Billing Info') {
                $scope.user = $scope.data[i].user;
            }
        }

        $scope.update = function(user) {
            // check for previous submissions for this step, if it exists then remove it.
            for(var i= 0, len= $scope.data.length; i< len; i++) {
                if($scope.data[i].name === 'Billing Info') {
                    $scope.data.splice(i, 1);
                }
            }

            // push the object into progressInfoFactory's array.
            formsAppService.addStep({name: 'Billing Info', user: user});
            // go to next step

            $location.path("/shipping");
            $route.reload();
        };
    };

    // inject function parameters to avoid script breakdown during minification
    billingInfoController.$inject = ['$scope', '$location','$route', 'formsAppService'];

    // Register controller to your app
    angular.module('FormsApp').controller("billingInfoController", billingInfoController);

}());
