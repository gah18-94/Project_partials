app.controller('AuditLogController',

    function AuditLogController($scope, $state, $stateParams, $location, ATMService, $cookies) {
        var Ad = this;
        if ($cookies.getObject('usr')) {
            $scope.usr = $cookies.getObject('usr');
            $scope.username = $scope.usr.fullName;
            Ad.isBusy = true;
            ATMService.getAuditLogs(function(err, response) {
                if (err) {
                    return alert(response);
                }
                if (response != null) {
                    console.log(response);
                    console.log(err);
                    $scope.Logs = response.Logs;
                    $scope.totalItems = $scope.Logs.length;
                    Ad.isBusy = false;
                } else {
                    alert(response)
                }

            })
        } else {
            $state.go('Login');
        }

        $scope.sort = function(keyname) {
            $scope.sortKey = keyname; //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
        $scope.viewby = 10;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 10; //Number of pager buttons to show

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first paghe
        }
    });