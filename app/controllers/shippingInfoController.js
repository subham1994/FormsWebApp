/**
 * Created by subham_1994 on २२-०१-२०१६.
 */
(function() {

    var shippingInfoController = function($scope, $location, progressInfoFactory) {
        $scope.user = {};
        $scope.data = progressInfoFactory.getSteps();

        // if user has previously entered any data, bind that data to the form model.
        for(var i= 0, len=$scope.data.length; i< len; i++) {
            if($scope.data[i].name === 'Shipping Info') {
                $scope.user = $scope.data[i].user;
            }
        }

        $scope.update = function(user) {
            // check for previous submissions for this step, if it exists then remove it.
            for(var i= 0, len= $scope.data.length; i< len; i++) {
                if($scope.data[i].name === 'Shipping Info') {
                    $scope.data.splice(i, 1);
                }
            }
            // push the object into progressInfoFactory's array.
            progressInfoFactory.addStep({name: 'Shipping Info', user: user});
            // go to next step
            $location.path("/preview");
        };
    };


    // inject function parameters to avoid script breakdown during minification
    shippingInfoController.$inject = ['$scope', '$location', 'progressInfoFactory'];

    // Register controller to your app
    angular.module('FormsApp').controller("shippingInfoController", shippingInfoController);

}());