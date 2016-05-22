
(function() {

    var asideCtrl = function($scope, formsAppService) {

        function initScope() {
            $scope.tab = 1;
            $scope.tabs = formsAppService.getPath();
            $scope.fullPage = "false";

            if($scope.tabs === '/'){
                $scope.tab = 1;
            }
            if ($scope.tabs === '/purchase') {
                $scope.tab = 2;
            }
            if ($scope.tabs === '/payment') {
                $scope.tab = 3;
            }
            if ($scope.tabs === '/sales') {
                $scope.tab = 4;
            }
            if ($scope.tabs === '/reciept') {
                $scope.tab = 5;
            }
        }

        initScope();

        $scope.$on('$routeChangeUpdate', initScope);
        $scope.$on('$routeChangeSuccess', initScope);
    };

    // inject function parameters to avoid script breakdown during minification
    asideCtrl.$inject = ['$scope', 'formsAppService'];

    // Register controller to your app
    angular.module('FormsApp').controller("asideCtrl", asideCtrl);

}());
