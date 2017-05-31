'use strict';
app.controller('HomeController',

    function HomeController($scope, $state, $stateParams, $location) {
        if ($stateParams.usr != null) {
            $scope.username = $stateParams.usr.fullName;
            $scope.Sref = function(id) {

                switch (id) {
                    case 1:
                        $state.go('Account', {
                            usr: { fullName: $stateParams.usr.fullName, username: $stateParams.usr.username, password: $stateParams.usr.password }
                        });
                        break;

                    case 2:
                        $state.go('Dispenser', {
                            usr: { fullName: $stateParams.usr.fullName, username: $stateParams.usr.username, password: $stateParams.usr.password }
                        });
                        break;
                    case 3:
                        $state.go('History', {
                            usr: { fullName: $stateParams.usr.fullName, username: $stateParams.usr.username, password: $stateParams.usr.password }
                        });
                        break;

                    default:
                        $state.go('Home', {
                            usr: { fullName: $stateParams.usr.fullName, username: $stateParams.usr.username, password: $stateParams.usr.password }
                        });
                        break;
                }
            }
        } else {
            $state.go('Login');
        }
    }
);