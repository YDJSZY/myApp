/**
 * Created by luwenwei on 16/7/30.
 */
var mainModule = angular.module("mainModule",["ngCookies"]);
mainModule.controller("mainCtrl",["$scope","$rootScope","$http","$cookies","$cookieStore","$location",function ($scope,$rootScope,$http,$cookies,
    $cookieStore,$location){
    $http({
        "url":"/myinfo",
        "method":"get"
    }).then(function (response) {
        if(!response.data){
            $rootScope.isLogin = false;
        }else{
            $rootScope.isLogin = true;
            $rootScope.myinformation = response.data;
            console.log(response)
        }
    })
    $scope.sendWeibo = function () {
        if(!$rootScope.isLogin){
            alert("请先登录!");
            $location.path("login");
            return;
        }
        var userInfo = $cookies.get("userInfo").substr(2);
        $scope.userId = angular.fromJson(userInfo).id;
        if(!$scope.userId) {
            alert("请重新登录")
        }
    }
}])