/**
 * Created by Apple on 16/7/13.
 */
var loginModule = angular.module("loginModule",["ngCookies"]);
loginModule.controller("loginCtrl",["$scope","$rootScope","$http","$cookies","$cookieStore",function ($scope,$rootScope,$http,
    $cookies,$cookieStore){
    $scope.login = function () {
        $http({
            "url":"/login",
            "method":"post",
            "data":{"username":$scope.username,"password":$scope.password}
        }).then(function (response) {
            /*$cookies.putObject("myinfo",{username:response.data.username,"password":response.data.password
            ,"id":response.data._id},{expires:new Date(new Date().getTime()+600000)});*/
        })
    }
}])
