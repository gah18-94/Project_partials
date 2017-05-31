'use strict';

app.controller('LoginController',
    function LoginController($scope, $location, $state, $http, ATMService) {

        $scope.ValidateUser = function() {
            ATMService.UserLogin($scope.user.userName, $scope.user.password, function(err, response) {
                if (err) {
                    return alert(err);
                }
                if (response) {
                    console.log(response);
                    console.log(err);
                    $state.go('Home', {
                        usr: { fullName: response.fullName, username: response.username, password: response.password }
                    });
                } else {
                    alert("Wrong username or password , please try again.")
                }

            })

        }
    });