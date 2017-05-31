app.controller('HistoryController',

    function HistoryController($scope, $state, $stateParams, $location, ATMService) {
        var hist = this;
        if ($stateParams.usr != null) {
            $scope.username = $stateParams.usr.fullName;
            ATMService.getAccounts($stateParams.usr.username, $stateParams.usr.password, function(err, response) {
                if (err) {
                    return alert(err);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Accounts = response;
                } else {
                    alert("There aren't accounts for the user.")
                }

            })

        } else {
            $state.go('Login');
        }

        $scope.Search = function() {

        }

    });