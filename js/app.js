'use strict';

var app = angular.module('ATM', ['ui.router', 'ngRoute'])
app.config(function($stateProvider, $urlRouterProvider, $routeProvider) {

    $stateProvider
        .state('default', {
            url: "/Login",
            views: {
                "root@": { templateUrl: "../partials/login/Login.html" }
            }
        })
        .state('Login', {
            url: "/Login",
            views: {
                "root@": { templateUrl: "../partials/login/Login.html" }
            }
        })
        .state('Home', {
            url: "/Home:usr",
            views: {
                "root@": { templateUrl: "../partials/Home/Home.html" },
                params: {
                    usr: ""
                }

            }
        })
        .state('Account', {
            url: "/Account:usr",
            views: {
                "root@": { templateUrl: "../partials/Home/Home.html" },
                "HomeView@": { templateUrl: "../partials/AccountDetails/Account.html" },
                params: {
                    usr: ""
                }

            }
        })
        .state('Dispenser', {
            url: "/Dispenser",
            views: {
                "root": { templateUrl: "../partials/Home/Home.html" },
                "HomeView": { templateUrl: "../partials/DispenserCash/Dispenser.html" },
                params: {
                    usr: ""
                }
            }
        });


    /* $routeProvider.when('/AccountDetails', {
         templateUrl: '../partials/AccountDetails/Account.html'
     });
     $routeProvider.when('/Home', {
         templateUrl: '../partials/Home/Home.html',

     });*/

    $urlRouterProvider.otherwise('/Login');

    /*$stateProvider.state(AccountDetails);*/
    /*$stateProvider.state(Dispenser);*/

    /* $routeProvider.when('/Account', {
         templateUrl: '../partials/AccountDetails/Account.html',

     });
     
                     $routeProvider.when('/Dispense', {
                         templateUrl: 'partials/DispenseCash/Dispenser.html',
                         controller: 'DispenseController',
                         resolve: {
                             event: function($route, eventData) {
                                 return eventData.getEvent($route.current.pathParams.eventId).$promise;
                             }
                         }
                     });*/
    /*$routeProvider.otherwise({ redirectTo: '/login' }); * /
     */

    /*$locationProvider.html5Mode(true);*/

});
/*
app.config(function($stateProvider, $urlRouteProvider) {
            $urlRouterProvider.otherwise("/login");

            $stateProvider

                .state('AccountDetails', {
                    url: "/AccountDetails",
                    templateUrl: "partials/AccountDetails/Account.html"
                })
                .state('Dispenser', {
                    url: "/Dispenser",
                    templateUrl: "partials/DispenserCash/Dispenser.html"
                });




            /*
            var app = angular.module('app', 'ui.router');

            app.config(function($stateProvider, $urlRouteProvider) {
                $urlRouterProvider.otherwise("/login");

                $stateProvider
                    .state('login', {
                        url: "/login",
                        templateUrl: "partials/login/login.html",
                        controller: "LoginController"
                    })
                    .state('AccountDetails', {
                        url: "/AccountDetails",
                        templateUrl: "partials/AccountDetails/Account.html",
                        controller: "AccountController"
                    })
                    .state('Home', {
                        url: "/Home",
                        templateUrl: "partials/Home/Account.html",
                        controller: "HomeController"
                    });

            });*/