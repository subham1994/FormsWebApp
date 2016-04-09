
(function() {
    var app = angular.module('FormsApp', ['ngRoute', 'ui.materialize', 'fcsa-number']);

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
            .when('/payment', {
                controller: 'paymentVoucherController',
                templateUrl: 'views/paymentVoucher.html'
            })
            .when('/shipping', {
                controller: 'shippingInfoController',
                templateUrl: 'views/shipping-info-form.html'
            })
            .when('/confirm', {
                templateUrl: 'views/confirmation.html'
            })
            .otherwise( {redirectTo: '/'} );
    });
}());
