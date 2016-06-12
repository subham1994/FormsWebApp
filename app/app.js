
(function() {
    var app = angular.module('FormsApp', ['ngRoute', 'ui.materialize', 'fcsa-number']);

    app.run(function($rootScope, $window) {
        // To bring back scroll bar on the top on route change event
        $rootScope.$on('$routeChangeSuccess', function () {
            if (document.readyState == 'complete') {
                $window.scrollTo(0, 0);
            }
        });
    });

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'views/home.html'
            })
            .when('/purchase', {
                controller: 'purchaseOrder',
                templateUrl: 'views/purchase-order.html'
            })
            .when('/payment', {
                controller: 'paymentVoucherController',
                templateUrl: 'views/paymentVoucher.html'
            })
            .when('/sales', {
                controller: 'salesVoucherController',
                templateUrl: 'views/salesVoucher.html'
            })
            .when('/reciept', {
                controller: 'recieptVoucherController',
                templateUrl: 'views/recieptVoucher.html'
            })
            .otherwise( {redirectTo: '/'} );

        // $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }]);
}());
