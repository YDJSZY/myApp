/**
 * Created by Apple on 16/7/14.
 */
var registerModule = angular.module("registerModule",[]);
registerModule.controller("registerCtrl",["$scope","$http",function ($scope,$http){
    $scope.register = function () {
        $http({
            "url":"/register",
            "method":"post",
            "data":{"username":$scope.username,"password":$scope.password}
        }).then(function (response) {
            console.log(response)
        })
    }
}])
