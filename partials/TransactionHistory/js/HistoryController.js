app.controller('HistoryController',

    function HistoryController($scope, $stateParams, $location) {
        var hist = this;
        $scope.username = $stateParams.usr.fullName;

    });