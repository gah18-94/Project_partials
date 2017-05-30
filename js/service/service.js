app.service('ATMService',
    function($http) { // Return public API.
        return ({
            UserLogin: UserLogin,
            getAccountDetails: getAccountDetails,
            getTransactionHistory: getTransactionHistory,
            postDispenseMoney: postDispenseMoney
        });


        // ---
        // PUBLIC METHODS.
        // ---


        //Login Validator
        function UserLogin(username, password, callback) {

            var request = {
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password,

            };

            $http(request)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (data,  status) {
                    callback(status, data);
                });


        }



        function getAccountDetails(username, password) {
            UrlReq = URL + username + '/' + password;

            var request = $http({
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password,
                params: {
                    action: "get"
                }
            });

            return (request.then(handleSuccess, handleError));

        }

        function getTransactionHistory(username, password) {
            UrlReq = URL + username + '/' + password;

            var request = $http({
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password,
                params: {
                    action: "get"
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function postDispenseMoney(username, password) {
            UrlReq = URL + username + '/' + password;

            var request = $http({
                method: "get",
                url: "http://localhost:5000/api/Users/" + username + "/" + password,
                params: {
                    action: "get"
                }
            });

            return (request.then(handleSuccess, handleError));
        }
        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError(response) {

            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {

                return ($q.reject("An unknown error occurred."));

            }

            // Otherwise, use expected error message.
            return ($q.reject(response.data.message));

        }


        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess(response) {

            return (response.data);

        }

    }
);







/*
    //Create new record
    this.post = function(Employee) {
            var request = $http({
                method: "post",
                url: "/api/EmployeesAPI",
                data: Employee
            });
            return request;
        }

        
        //Get Single Records
    this.get = function(EmpNo) {
        return $http.get("/api/EmployeesAPI/" + EmpNo);
    }




    //Update the Record
    this.put = function(EmpNo, Employee) {
            var request = $http({
                method: "put",
                url: "/api/EmployeesAPI/" + EmpNo,
                data: Employee
            });
            return request;
        }
        //Delete the Record
    this.delete = function(EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeesAPI/" + EmpNo
        });
        return request;
    }*/