/**
 * Created by Apple on 16/7/13.
 */
var app = angular.module("app",["ngRoute","loginModule","registerModule"]);
app.config(["$routeProvider",function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerCtrl',
        })
}])