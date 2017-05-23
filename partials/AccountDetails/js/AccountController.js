app.controller('AccountController',

    function AccountController($scope, $stateParams, $location) {
        $scope.username = $stateParams.usr;
    });