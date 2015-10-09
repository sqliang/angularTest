/**
 * Created by sqlliang on 2015/10/3.
 */
var form_module = angular.module('form_module',[]);

form_module.controller('form_ctrl', function ($scope) {
    $scope.master = {
        firstName : 'John',
        lastName : 'Doe'
    };
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

form_module.controller('validate_ctrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});
