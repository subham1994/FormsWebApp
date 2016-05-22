(function() {
    var salesVoucherController = function($scope, $location) {

        $scope.customer = [
            {id: 1, name: 'Arpan Ahuja', godown: ['Patna', 'Delhi', 'Mumbai']},
            {id: 2, name: 'Vinayak Anand', godown: ['Bangalore', 'Hyderabad', 'Chennai']},
            {id: 3, name: 'Subham Gaurav', godown: ['Nagpur', 'Bhopal', 'Kolkata']},
            {id: 4, name: 'Keshav Ratan', godown: ['Ranchi', 'Patna', 'Mumbai']},
            {id: 5, name: 'Nishant Gaurav', godown: ['Kolkata', 'Bengaluru', 'Patna']}
        ];
        var subForm = {
            itemName: [
                {id: 1, name: 'Dummy Item 1', rate: 200},
                {id: 2, name: 'Dummy Item 2', rate: 500},
                {id: 3, name: 'Dummy Item 3', rate: 1500}
            ],
            isEditable: true,
            isSubmitted: false
        };

        $scope.user = {};
        $scope.user.subFormDetails = [];
        $scope.total = 0;
        $scope.subForms = [{form: subForm, user: {item: subForm.itemName[0]}, formNo: 0}];

        var getRequiredForm = function(formNo) {
            for(var i= 0, len=$scope.subForms.length; i<len; i++) {
                if($scope.subForms[i].formNo === formNo) {
                    return $scope.subForms[i];
                }
            }
        };

        $scope.maintainPurchase = function(formNo) {
            var formObj = getRequiredForm(formNo);

            formObj.form.isEditable = false;
            formObj.form.isSubmitted = true;

            $scope.subForms.push({
                form: {
                    itemName: [
                        {id: 1, name: 'Dummy Item 1', rate: 200},
                        {id: 2, name: 'Dummy Item 2', rate: 500},
                        {id: 3, name: 'Dummy Item 3', rate: 1500}
                    ],
                    isEditable: true,
                    isSubmitted: false
                },
                user: {item: subForm.itemName[0]},
                formNo: ++formNo
            });

            $scope.total += (parseInt(formObj.user.item.rate) * parseInt(formObj.user.item_unit) * parseInt(formObj.user.item_qty));
            $scope.user.subFormDetails.push(formObj.user);
            $scope.user.total = $scope.total;
        };

        $scope.submitPayment = function(user) {
            $location.path("/");
        };
    };

    // inject function parameters to avoid script breakdown during minification
    salesVoucherController.$inject = ['$scope', '$location'];

    // Register controller to your app
    angular.module('FormsApp').controller("salesVoucherController", salesVoucherController);

}());
