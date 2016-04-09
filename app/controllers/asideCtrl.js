
(function() {

    var asideCtrl = function($scope, progressInfoFactory) {

        function initScope() {
            alert("i was called")
            $scope.tab = 1;
            $scope.tabs = progressInfoFactory.getPath();
            $scope.fullPage = "false";

            if ($scope.tabs === '/billing') {
                $scope.tab = 2;
            }
            if ($scope.tabs === '/shipping') {
                $scope.tab = 3;
            }
            if ($scope.tabs === '/payment') {
                $scope.tab = 4;
            }
            if ($scope.tabs === '/confirm') {
                $scope.fullPage = "true";
            }
        }

        initScope();

        $scope.$on('$routeChangeUpdate', initScope);
        $scope.$on('$routeChangeSuccess', initScope);
    };

    // inject function parameters to avoid script breakdown during minification
    asideCtrl.$inject = ['$scope', 'progressInfoFactory'];

    // Register controller to your app
    angular.module('FormsApp').controller("asideCtrl", asideCtrl);

}());
