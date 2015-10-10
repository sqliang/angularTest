/**
 * Created by dell on 2015/10/10.
 */
var myFormModule = angular.module("myFormModule",[]);
myFormModule.controller("form_ctrl",["$scope",
    function ($scope) {
        $scope.user = {
            userName : 'sqliang',
            password : ''
        };
        $scope.save = function(){
            alert("保存数据");
        };
    }
]);

myFormModule.directive("contenteditable",function(){
    return {
        require : 'ngModel',
        controller : function(){

        },
        link : function (scope, elem, attrs, ctrl) {
            //view---->model
            elem.bind('keyup',function(){
                scope.$apply(function () {
                    ctrl.$setViewValue(elem.text);
                })
            });
            //model----->>view
            ctrl.$render = function () {
                elem.html(ctrl.$viewValue);
            };
            //load init value from DOM
            ctrl.$setViewValue(elem.html());
        }
    }
});