/**
 * Created by sqlliang on 2015/10/3.
 */
var filter_module = angular.module('filterDemo',[]);

filter_module.controller('person_ctrl',function($scope){
    $scope.lastName = "Doe";
});

filter_module.controller('cost_ctrl', function ($scope) {
    $scope.quantity = 1;
    $scope.price = 3.55;
});

filter_module.controller('names_ctrl', function ($scope) {
    $scope.names = [
        {
            name : 'sqliang',
            country : 'shangq'
        },
        {
            name : 'zcy',
            country : 'hk'
        },
        {
            name : 'liyang',
            country : 'jdkf'
        }
    ];
});
