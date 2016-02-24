
(function() {
    var app = angular.module('FormsApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'purchaseOrder',
                templateUrl: 'views/purchase-order.html'
            })
            .when('/billing', {
                controller: 'billingInfoController',
                templateUrl: 'views/billing-info-form.html'
            })
            .when('/shipping', {
                controller: 'shippingInfoController',
                templateUrl: 'views/shipping-info-form.html'
            })
            .when('/preview', {
                controller: 'progressController',
                templateUrl: 'views/progress.html'
            })
            .otherwise( {redirectTo: '/'} );
    });
}());
