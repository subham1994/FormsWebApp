(function() {

    var homeController = function() {

        // This page does not have any form, does not a dialog at page exit
        window.onbeforeunload = null;

        var self = this;
        self.timelineData = [
            {
                formName: "purchase order",
                amount: 27500,
                date: "9-12-2015, 12:30 pm"
            },
            {
                formName: "payment voucher",
                amount: 7000,
                date: "12-7-2016, 6:30 pm"
            },
            {
                formName: "payment voucher",
                amount: 8500,
                date: "11-9-2016, 12:15 pm"
            },
            {
                formName: "purchase order",
                amount: 10000,
                date: "7-3-2016, 11:30 am"
            },
            {
                formName: "payment voucher",
                amount: 12000,
                date: "7-12-2016, 2:30 pm"
            },
            {
                formName: "payment voucher",
                amount: 27500,
                date: "9-12-2015, 12:30 pm"
            },
            {
                formName: "payment voucher",
                amount: 7000,
                date: "12-7-2016, 6:30 pm"
            },
            {
                formName: "purchase order",
                amount: 8500,
                date: "11-9-2016, 12:15 pm"
            }
        ]; 
    };

    // Register controller to your app
    angular.module('FormsApp').controller("homeController", [homeController]);

}());
