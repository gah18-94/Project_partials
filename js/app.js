/*'use strict';

var eventsApp = angular.module('ATM', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/login/Login.html',
            controller: 'LoginController.js'
        });
        $routeProvider.when('/Home', {
            templateUrl: 'partials/Home/Home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/Account', {
            templateUrl: 'partials/AccountDetails/Account.html',
            controller: 'AccountController'
        });
        $routeProvider.when('/Dispense', {
            templateUrl: 'partials/DispenseCash/Dispenser.html',
            controller: 'DispenseController',
            resolve: {
                event: function($route, eventData) {
                    return eventData.getEvent($route.current.pathParams.eventId).$promise;
                }
            }
        });
        $routeProvider.otherwise({ redirectTo: '/login' });

        $locationProvider.html5Mode(true);

    });
*/


var app = angular.module('app', 'ui.router');

app.config(function($stateProvider, $urlRouteProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "partials/login/login.html",
            controller: "js/LoginController"
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

});