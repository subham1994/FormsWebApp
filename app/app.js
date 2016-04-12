
(function() {
    var app = angular.module('FormsApp', ['ngRoute', 'ui.materialize', 'fcsa-number']);

    app.run(function($rootScope, $window) {
        $rootScope.$on('$routeChangeSuccess', function () {
            if (document.readyState == 'complete') {
                $window.scrollTo(0, 0);
                clearInterval(interval);
            }
        });
    });

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'views/home.html'
            })
            .when('/purchase', {
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
            .otherwise( {redirectTo: '/'} );
    });
}());
