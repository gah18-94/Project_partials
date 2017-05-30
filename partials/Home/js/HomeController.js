'use strict';
app.controller('HomeController',

    function HomeController($scope, $state, $stateParams, $location) {
        $scope.username = $stateParams.usr.fullName;

        $scope.Sref = function(id) {

            switch (id) {
                case 1:
                    $state.go('Account', {
                        usr: { username: $stateParams.usr.username, fullName: $stateParams.usr.fullName }
                    });
                    break;

                case 2:
                    $state.go('Dispenser', {
                        usr: { username: $stateParams.usr.username, fullName: $stateParams.usr.fullName }
                    });
                    break;
                case 3:
                    $state.go('History', {
                        usr: { username: $stateParams.usr.username, fullName: $stateParams.usr.fullName }
                    });
                    break;

                default:
                    $state.go('Home', {
                        usr: { username: $stateParams.usr.username, fullName: $stateParams.usr.fullName }
                    });
                    break;
            }
        }


    }

);