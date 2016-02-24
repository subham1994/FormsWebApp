
(function() {
    var personalInfoController = function($scope, $route, progressInfoFactory) {
        var forms = {
            name: "first_name",
            date: "date",
            gender: ["debtor", "Male", "Female"]
        };
        $scope.users = [forms];
        $scope.hasFormBeenEdited = false;
        $scope.order = {};
        $scope.completedOrders = [];
        $scope.data = progressInfoFactory.getSteps();


        //if user has previously entered any data, bind that data to the form model
        for (var i = 0, len = $scope.data.length; i < len; i++) {
            if ($scope.data[i].name === 'Personal Info') {
                $scope.user = $scope.data[i].user;
            }
        }

        $scope.update = function(user) {
            // check for previous submissions for this step, if it exists then remove it
            for(var i = 0, len = $scope.data.length; i < len; i++) {
                if($scope.data[i].name === 'Personal Info') {
                    $scope.data.splice(i, 1);
                }
            }
            // push the object into progressInfoFactory's array
            progressInfoFactory.addStep({name: 'Personal Info', user: user});

            $scope.completedOrders.push($scope.user);
            $scope.user = {};
            this.personalInfoForm.$setPristine(true);
        };
    };

    // inject function parameters to avoid script breakdown during minification
    personalInfoController.$inject = ['$scope', '$route', 'progressInfoFactory'];

    // Register controller to your app
    angular.module('FormsApp').controller("purchaseOrder", personalInfoController);

}());
