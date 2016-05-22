(function() {
    var recieptVoucher = function($scope, $location) {
        $scope.user = {};
        $scope.user.amount = 0;
        $scope.searchResults = [
            {id: 1, ref_no: "ra", customer: "customer A", items: "item A", qty: "2", tot_amt: "5500"},
            {id: 2, ref_no: "rb", customer: "customer B", items: "item B", qty: "1", tot_amt: "500"},
            {id: 3, ref_no: "rc", customer: "customer c", items: "item C", qty: "3", tot_amt: "1000"}
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

        $scope.isEmpty = function(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)){
                    if(obj[key]) {
                        return false;
                    }
                }
            }
            return true;
        }

        $scope.submitPurchase = function(user) {
            $location.path("/");
        }

    };

    // inject function parameters to avoid script breakdown during minification
    recieptVoucher.$inject = ['$scope', '$location'];

    // Register controller to your app
    angular.module('FormsApp').controller("recieptVoucherController", recieptVoucher);

}());
