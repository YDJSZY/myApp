/**
 * Created by Apple on 16/7/13.
 */
var loginModule = angular.module("loginModule",[]);
loginModule.controller("loginCtrl",["$scope",function ($scope){
    $scope.login = "this is login page";
}])
