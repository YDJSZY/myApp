/**
 * Created by Apple on 16/7/13.
 */
var loginModule = angular.module("loginModule",[]);
loginModule.controller("loginCtrl",["$scope","$http",function ($scope,$http){
    $scope.login = function () {
        $http({
            "url":"/login",
            "method":"post",
            "data":{"username":$scope.username,"password":$scope.password}
        }).then(function (response) {
            console.log(response)
        })
    }
}])
