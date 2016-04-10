/**
 * Created by subham_1994 on २७-०२-२०१६.
 */


(function() {
    var paymentVoucher = function($scope, $location) {
        $scope.search = {};
        $scope.user = {};
        $scope.user.amount = 0;
        $scope.searchResults = [
            {id: 1, ref_no: "ra", vendor: "Vendor A", items: "item A", qty: "2", tot_amt: "5500"},
            {id: 2, ref_no: "rb", vendor: "Vendor B", items: "item B", qty: "1", tot_amt: "500"},
            {id: 3, ref_no: "rc", vendor: "Vendor A", items: "item C", qty: "3", tot_amt: "1000"}
        ];
        $scope.options = ['val 1', 'val 2', 'val 3']
        $scope.showResults = false;
        $scope.showPayment = false;

        $scope.showPaymentForm = function () {
            $scope.showPayment = true;
        };

        $scope.searchResult = function(searchModel) {
            $scope.showResults = true;
        };

        $scope.submitPurchase = function(user) {
            $location.path("/confirm");
        }

    };

    // inject function parameters to avoid script breakdown during minification
    paymentVoucher.$inject = ['$scope', '$location'];

    // Register controller to your app
    angular.module('FormsApp').controller("paymentVoucherController", paymentVoucher);

}());
