app.controller('HistoryController',

    function HistoryController($scope, $state, $location, ATMService, $cookies) {
        var hist = this;
        $scope.Transactions = [];
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            $scope.username = $scope.usr.fullName;
            ATMService.getAccounts($scope.usr.username, $scope.usr.password, function(err, response) {
                hist.isBusy = true;
                if (err) {
                    return alert(responser);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                    hist.isBusy = false;
                } else {
                    alert(response)
                    hist.isBusy = false;
                }

            })

        } else {
            $state.go('Login');
        }

        $scope.Search = function() {
            var sDate = moment($scope.hist.StartDate).format("YYYY-MM-DD HH:mm");
            var eDate = moment($scope.hist.endDate).format("YYYY-MM-DD HH:mm");
            if (sDate <= eDate) {
                ATMService.getTransactionHistory($scope.usr.username,
                    $scope.usr.password, $scope.hist.Account, sDate, eDate,
                    function(err, response) {
                        hist.isBusy = true;
                        if (err) {
                            hist.isBusy = false;
                            ATMService.postAuditLog("Error in function getTransactionHistory: " + response + " _ Error: " + err, "Error");
                            return alert(response);
                        }

                        if (response != null) {
                            console.log(response);
                            ATMService.postAuditLog("Succesfully getTransactionHistory for user: " + $scope.usr.username, "Info");
                            $scope.Transactions = response;
                            hist.isBusy = false;

                        } else {
                            alert(response);
                            ATMService.postAuditLog("Error in function getTransactionHistory: " + response + "_ Error: " + err, "Critical Error");
                            hist.isBusy = false;
                        }
                    })
            } else {
                return alert("Start Date must be less then end date.")
            }

        }

    });