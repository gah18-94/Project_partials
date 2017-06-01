app.controller('AccountController',

    function AccountController($scope, $state, $stateParams, $location, ATMService, $cookies) {
        var Acc = this;
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            $scope.username = $scope.usr.fullName;
            Acc.isBusy = true;
            ATMService.getAccountDetails($scope.usr.username, $scope.usr.password, function(err, response) {
                if (err) {
                    return alert(response);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                    Acc.isBusy = false;
                } else {
                    alert(response)
                }

            })
        } else {
            $state.go('Login');
        }
    });