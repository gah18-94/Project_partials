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
                        usr: { username: response.username, fullName: response.fullName }
                    });
                } else {
                    alert("Username or password wrong, please try again.")
                }

            })

        }
    });