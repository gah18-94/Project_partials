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
            url: "/Home",
            params: { usr: null },
            views: {
                "root@": { templateUrl: "../partials/Home/Home.html" }
            }
        })
        .state('Account', {
            url: "/Account",
            params: { usr: null },
            views: {
                "root": { templateUrl: "../partials/Home/Home.html" },
                "HomeView": { templateUrl: "../partials/AccountDetails/Account.html" },


            }
        })
        .state('Dispenser', {
            url: "/Dispenser",
            params: { usr: null },
            views: {
                "root": { templateUrl: "../partials/Home/Home.html" },
                "HomeView": { templateUrl: "../partials/DispenserCash/Dispenser.html" },

            }
        })
        .state('History', {
            url: "/History/",
            params: { usr: null },
            views: {
                "root": { templateUrl: "../partials/Home/Home.html" },
                "HomeView": { templateUrl: "../partials/TransactionHistory/History.html" },

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