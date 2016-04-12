
(function() {
    var formsAppService = function($location) {
        var currentProgress = {};

        currentProgress.steps = [];

        currentProgress.addStep = function(user) {
            currentProgress.steps.push(user);
        };

        currentProgress.getSteps = function () {
            return currentProgress.steps;
        };

        currentProgress.getPath = function(){
            return $location.path();
        };

        return currentProgress;
    };

    formsAppService.$inject = ['$location'];

    angular.module('FormsApp').factory('formsAppService', formsAppService);
}());
