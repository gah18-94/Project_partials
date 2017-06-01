app.service('ATMService',
    function($http) { // Return public API.
        return ({
            UserLogin: UserLogin,
            getAccounts: getAccounts,
            getAccountDetails: getAccountDetails,
            getTransactionHistory: getTransactionHistory,
            postDispenseMoney: postDispenseMoney
        });


        // ---
        // PUBLIC METHODS.
        // ---


        //Login Validator
        function UserLogin(username, password, callback) {

            var request = {
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });


        }



        function getAccounts(username, password, callback) {
            var request = {
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password + "/Accounts"

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });

        }

        function getAccountDetails(username, password, callback) {
            var request = {
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password + "/AccountDetails"

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });

        }

        function getTransactionHistory(username, password, id_account, starDate, endDate, callback) {
            var request = {
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password + "/Accounts/TransactionHistory/" + id_account + "/" + starDate + "/" + endDate

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });
        }

        function postDispenseMoney(username, password, Id_Account, Amount, Description, callback) {
            var request = {
                method: "post",
                url: "http://localhost:5000/api/Users/" + username + "/" + password + "/Accounts/TransactionHistory/Dispense/" + Id_Account + "/" + Amount + "/" + Description

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });
        }


    }
);