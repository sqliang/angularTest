/**
 * Created by sqlliang on 2015/10/3.
 */
var event_module = angular.module('event_module',[]);

event_module.controller('click_ctrl', function ($scope) {
    $scope.count = 0;
});

event_module.controller('person_ctrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.myVar = false;
    $scope.toggle = function (){
        $scope.myVar = !$scope.myVar;
    };
})