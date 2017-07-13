'use strict';

app.controller('LoginController',
    function LoginController($scope, $location, $state, $http, ATMService, $cookies) {
        var log = this;
        $scope.ValidateUser = function() {
            ATMService.UserLogin($scope.user.userName, $scope.user.password, function(err, response) {
                log.isBusy = true;
                if (err) {
                    ATMService.postAuditLog("Error in function ValidateUser: " + response + " _ Error: " + err, "Error");
                    return alert(response);

                }
                if (response) {
                    console.log(response);
                    console.log(err);
                    $cookies.putObject('usr', response);
                    ATMService.postAuditLog("Succesfully ValidateUser for user: " + response.username, "Info")
                    $state.go('Home', {
                        usr: { fullName: response.fullName, username: response.username, password: response.password }
                    });

                    log.isBusy = false;
                } else {
                    alert(response)
                    log.isBusy = false;
                    ATMService.postAuditLog("Error in function ValidateUser: " + response + " _ Error: " + err, "Critical Error");

                }

            })

        }
    });