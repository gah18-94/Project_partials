app.service('ATMService',
    function($http) { // Return public API.
        var pathATM = "http://localhost:5000/api/Users/";
        var pathMongoLog = "http://localhost:3000/api/Log";
        return ({
            UserLogin: UserLogin,
            getAccounts: getAccounts,
            getAccountDetails: getAccountDetails,
            getTransactionHistory: getTransactionHistory,
            postDispenseMoney: postDispenseMoney,
            getAuditLogs: getAuditLogs,
            postAuditLog: postAuditLog
        });


        // ---
        // PUBLIC METHODS.
        // ---


        //Login Validator
        function UserLogin(username, password, callback) {

            var request = {
                method: "get",
                url: pathATM + username + "/" + password

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
                url: pathATM + username + "/" + password + "/Accounts"

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
                url: pathATM + username + "/" + password + "/AccountDetails"

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
                url: pathATM + username + "/" + password + "/Accounts/TransactionHistory/" + id_account + "/" + starDate + "/" + endDate

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
                url: pathATM + username + "/" + password + "/Accounts/TransactionHistory/Dispense/" + Id_Account + "/" + Amount + "/" + Description

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });
        }

        function getAuditLogs(callback) {
            var request = {
                method: "get",
                url: pathMongoLog

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });
        }

        function postAuditLog(Description, Impact, callback) {
            var request = {
                method: "post",
                url: pathMongoLog,
                params: { Description: Description, Type: Impact }

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