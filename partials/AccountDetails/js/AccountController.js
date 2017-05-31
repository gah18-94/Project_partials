app.controller('AccountController',

    function AccountController($scope, $state, $stateParams, $location, ATMService) {
        var Acc = this;
        if ($stateParams.usr != null) {
            Acc.isBusy = true;
            $scope.username = $stateParams.usr.fullName;
            ATMService.getAccountDetails($stateParams.usr.username, $stateParams.usr.password, function(err, response) {
                if (err) {
                    return alert(err);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                    Acc.isBusy = false;
                } else {
                    alert("There aren't accounts for the user.")
                }

            })
        } else {
            $state.go('Login');
        }
    });