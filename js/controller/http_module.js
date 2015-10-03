/**
 * Created by sqlliang on 2015/10/3.
 */
var http_module = angular.module('http_module',[]);

http_module.controller('customer_ctrl',function($scope,$http){
    $http.get('Customers_JSON.json').
        success(function(data){
            $scope.names = data;
        });
});
