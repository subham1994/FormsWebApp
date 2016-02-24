/**
 * Created by subham_1994 on २२-०१-२०१६.
 */
(function() {

    var progressController = function($scope, progressInfoFactory) {
        $scope.completedSteps = progressInfoFactory.getSteps();
    };

    // inject function parameters to avoid script breakdown during minification
    progressController.$inject = ['$scope', 'progressInfoFactory'];

    // Register controller to your app
    angular.module('FormsApp').controller("progressController", progressController);

}());