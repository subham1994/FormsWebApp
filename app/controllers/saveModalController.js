/**
 * Created by subham on 29/5/16.
 */
(function() {
    var saveModalController = function($scope, $window) {
        $scope.onExit = function () {
            $('#saveChangesModal').openModal({
                dismissible: false,
                opacity: .7,
                in_duration: 300,
                out_duration: 200,
            });
        };

        $window.onbeforeunload = $scope.onExit;
    }

    // inject function parameters to avoid script breakdown during minification
    saveModalController.$inject = ['$scope', '$window'];

    // Register controller to your app
    angular.module('FormsApp').controller("saveModalController", saveModalController);

}());