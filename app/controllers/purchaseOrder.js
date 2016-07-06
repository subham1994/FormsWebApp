(function() {
    var personalInfoController = function ($scope, $location, $http) {

        // Not tested for all the browsers (Tested browsers : chrome)
        window.onbeforeunload = function() {
            return 'You have a uncompleted form. Do you still want to leave this page?';
        }

        /**************** Dummy data ****************/

        $scope.debtor = [
            {id: 1, name: 'Arpan Ahuja', godown: ['Patna', 'Delhi', 'Mumbai']},
            {id: 2, name: 'Vinayak Anand', godown: ['Bangalore', 'Hyderabad', 'Chennai']},
            {id: 3, name: 'Subham Gaurav', godown: ['Nagpur', 'Bhopal', 'Kolkata']},
            {id: 4, name: 'Keshav Ratan', godown: ['Ranchi', 'Patna', 'Mumbai']},
            {id: 5, name: 'Nishant Gaurav', godown: ['Kolkata', 'Bengaluru', 'Patna']}
        ];
        var subForm = {
            itemName: [
                { id: 1, name: 'Dummy Item 1', rate: 200, unit: 'kg' },
                { id: 2, name: 'Dummy Item 2', rate: 500, unit: 'kg' },
                { id: 3, name: 'Dummy Item 3', rate: 1500, unit: 'kg' }
            ],
            isEditable: true,
            isSubmitted: false
        };

        $scope.debtor = [
            {id: 1, name: 'Arpan Ahuja', godown: ['Patna', 'Delhi', 'Mumbai']},
            {id: 2, name: 'Nishant Gaurav', godown: ['Bangalore', 'Hyderabad', 'Chennai']},
            {id: 3, name: 'Subham Gaurav', godown: ['Nagpur', 'Bhopal', 'Kolkata']},
            {id: 4, name: 'Keshav Ratan', godown: ['Ranchi', 'Patna', 'Mumbai']}
        ];

        /**************** Dummy data ****************/

        $scope.user = {
            subFormDetails: []
        };
        $scope.total = 0;
        $scope.subForms = [{form: subForm, user: { item: {} }, formNo: 0}];

        var getRequiredForm = function (formNo) {
            for(var i= 0, len=$scope.subForms.length; i<len; i++) {
                if($scope.subForms[i].formNo === formNo) {
                    return $scope.subForms[i];
                }
            }
        };

        $scope.maintainPurchase = function (formNo) {
            var formObj = getRequiredForm(formNo);

            formObj.form.isEditable = false;
            formObj.form.isSubmitted = true;

            $scope.subForms.push({
                form: subForm,
                user: {item: subForm.itemName[0]},
                formNo: ++formNo
            });

            $scope.total += (parseInt(formObj.user.item.rate) * parseInt(formObj.user.item_qty));
            $scope.user.subFormDetails.push(formObj.user);
            $scope.user.total = $scope.total;
        };

        $scope.selectItem = function (formNo, id) {
            var formObj = getRequiredForm(formNo);
            formObj.form.itemName.forEach(function (item) {
                if (item.id === id) {
                    formObj.user.item = item;
                }
            });
        };

        $scope.isAddNewItemFormValid = function (user) {
            return !user.newItem || !user.newItemRate || !user.newItemUnit;
        };


        $scope.isEditRateFormValid = function (formObj) {
            return !formObj.user.item.name || !formObj.user.item.rate || !formObj.user.item.unit;
        };

        $scope.addNewItem = function (formNo,user) {
            var formObj = getRequiredForm(formNo);
            var maxId = Math.max.apply(Math, formObj.form.itemName.map(function (itemObj) {
                return itemObj.id;
            }));
            formObj.form.itemName.push({ id: maxId + 1, name: user.newItem, rate: user.newItemRate, unit: 'kg' });
            $scope.selectItem(formNo, maxId + 1);
        };

        $scope.submitPayment = function (user) {
            $location.path("/");
            $http
                // TODO : pass on the correct request
                .post('/submitPurchaseVoucher', {a: 'a from angular', b: 'b from angular'})
                .then(function() {
                console.log('Request went through');
            }, undefined);
        };

        $scope.fetchResults = function (keyword) {
            $scope.searchResults = [];
            subForm.itemName.forEach(function (item) {
                if (keyword && item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0) {
                    $scope.searchResults.push(item);
                }
            });
        };

        $scope.onExit = function () {
            return ('bye bye');
        };
    };

    // inject function parameters to avoid script breakdown during minification
    personalInfoController.$inject = ['$scope', '$location', '$http'];

    // Register controller to your app
    angular.module('FormsApp').controller("purchaseOrder", personalInfoController);

}());
