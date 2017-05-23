'use strict';
app.controller('HomeController',

    function HomeController($scope, $stateParams, $location) {
        $scope.username = $stateParams.usr;
    }
);