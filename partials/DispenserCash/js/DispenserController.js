app.controller('DispenserController',

    function DispenserController($scope, $state, $cookies, $location, ATMService) {
        var disp = this;
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            $scope.username = $scope.usr.fullName;
            ATMService.getAccounts($scope.usr.username, $scope.usr.password, function(err, response) {
                disp.isBusy = true;
                if (err) {
                    ATMService.postAuditLog("Error in function getAccounts: " + response + " _ Error: " + err, "Error");
                    return alert(response);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                    disp.isBusy = false;
                    ATMService.postAuditLog("Succesfully getAccounts for user: " + $scope.usr.username, "Info");
                } else {
                    alert(response)
                    disp.isBusy = false;
                    ATMService.postAuditLog("Error in function getAccounts: " + response + " _ Error: " + err, "Critical Error");
                }

            })

        } else {
            $state.go('Login');
        }

        $scope.DispenseMoney = function() {
            ATMService.postDispenseMoney($scope.usr.username, $scope.usr.password, $scope.disp.AccountSelection, $scope.disp.Amount, $scope.disp.Description,
                function(err, response) {
                    disp.isBusy = true;
                    if (err) {
                        disp.isBusy = false;
                        ATMService.postAuditLog("Error in function postDispenseMoney: " + response + " _ Error: " + err, "Error");
                        return alert(response);

                    }

                    if (response != null) {
                        console.log(response);
                        console.log(err);
                        disp.isBusy = false;
                        ATMService.postAuditLog("Succesfully postDispenseMoney for user" + $scope.usr.username, "Info");
                        return alert(response);


                    } else {
                        alert(response)
                        ATMService.postAuditLog("Error in function postDispenseMoney: " + response + " _ Error: " + err, "Critical Error");
                        disp.isBusy = false;
                    }
                })
        }

    });