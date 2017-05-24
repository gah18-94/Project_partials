app.controller('AccountController',

    function AccountController($scope, $stateParams, $location) {
        var Acc = this;
        $scope.username = $stateParams.usr;
    });