'use strict';
app.controller('HomeController',

    function HomeController($scope, $state, $location, $cookies, ATMService) {
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            if ($scope.usr != null) {
                $scope.username = $scope.usr.fullName;
                $scope.Sref = function(id) {

                    switch (id) {
                        case 1:
                            $state.go('Account');
                            break;

                        case 2:
                            $state.go('Dispenser');
                            break;
                        case 3:
                            $state.go('History');
                            break;
                        case 4:
                            $state.go('AuditLog');
                            break;

                        default:
                            $state.go('Home');
                            break;
                    }
                }



            }
        } else {
            $state.go('Login');
        }

        $scope.LogOut = function() {
            ATMService.postAuditLog("LogOut User" + $scope.username, "Info");
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function(v, k) {
                $cookies.remove(k);
            });
            $state.go('Login');

        }
    }
);