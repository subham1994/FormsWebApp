
(function() {

    var asideCtrl = function($scope, progressInfoFactory) {

        $scope.tab = 1;
        $scope.tabs = progressInfoFactory.getPath();

        if ($scope.tabs === '/billing') {
            $scope.tab = 2;
        }
        if ($scope.tabs === '/shipping') {
            $scope.tab = 3;
        }
        if ($scope.tabs === '/preview') {
            $scope.tab = 4;
        }
    };

    // inject function parameters to avoid script breakdown during minification
    asideCtrl.$inject = ['$scope', 'progressInfoFactory'];

    // Register controller to your app
    angular.module('FormsApp').controller("asideCtrl", asideCtrl);

}());
