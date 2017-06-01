app.controller('DispenserController',

    function DispenserController($scope, $state, $cookies, $location, ATMService) {
        var disp = this;
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            $scope.username = $scope.usr.fullName;
            ATMService.getAccounts($scope.usr.username, $scope.usr.password, function(err, response) {
                disp.isBusy = true;
                if (err) {
                    return alert(response);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                    disp.isBusy = false;
                } else {
                    alert(response)
                    disp.isBusy = false;
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
                        return alert(response);
                        disp.isBusy = false;
                    }

                    if (response != null) {
                        console.log(response);
                        console.log(err);
                        return alert(response);
                        disp.isBusy = false;

                    } else {
                        alert(response)
                        disp.isBusy = false;
                    }
                })
        }

    });