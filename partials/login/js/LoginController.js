'use strict';

app.controller('LoginController',
    function LoginController($scope, $location) {

        $scope.ValidateUser = function() {
            if ($scope.newLogIn.$valid) {
                if ($scope.user.userName != null || $scope.user.userName != '') {
                    if ($scope.user.userName === 'g') {
                        if ($scope.user.password != null || $scope.user.password != '') {
                            if ($scope.user.password === '1') {
                                alert('Ok, go ahead.');
                                $location.path("/Home");
                            } else {
                                alert('Wrong pwd.');
                            }
                        } else {
                            alert('Pwd null or empty.');
                        }
                    } else {
                        alert('Wrong username');
                    }
                } else {
                    alert('Username null or empty');
                }
            }
        }

    }
);