app.service('ATMService', function($http) {

    //Login Validator
    this.Login = function(username, pwd) {
            return $http.get("/api/Login/" + username + "/" + pwd);
        }
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
});