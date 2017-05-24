'use strict';

app.controller('LoginController',
    function LoginController($scope, $location, $state, $http) {

        $scope.ValidateUser = function() {
            if ($scope.newLogIn.$valid) {
                if ($scope.user.userName != null || $scope.user.userName != '') {
                    if ($scope.user.userName === 'g') {
                        if ($scope.user.password != null || $scope.user.password != '') {
                            if ($scope.user.password === '1') {
                                /* alert('Ok, go ahead.');*/
                                $state.go("Home", {
                                    usr: $scope.user.userName

                                });
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
            /*  var user = this;
              user.isBusy = true;
              $http.get('http://localhost:53153/api/Users/' + $scope.user.username + '/' + $scope.user.password)
                  .then(function(response) {
                          angular.copy(response.data, $scope.uservalidated);
                      },
                      function(err) {
                          user.errorMessage = "Failed";
                      }).finally(function() {
                      user.isBusy = false;
                  });*/

        }

    }
);