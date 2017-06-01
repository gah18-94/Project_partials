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
            ATMService.getTransactionHistory($scope.usr.username,
                $scope.usr.password, $scope.hist.Account, $scope.hist.StartDate.toISOString(), $scope.hist.endDate.toISOString(),
                function(err, response) {
                    hist.isBusy = true;
                    if (err) {
                        return alert(response);
                        hist.isBusy = false;
                    }

                    if (response != null) {
                        console.log(response);
                        console.log(err);
                        $scope.Transactions = response;
                        hist.isBusy = false;

                    } else {
                        alert(response)
                        hist.isBusy = false;
                    }
                })

        }

    });