/**
 * Created by dell on 2015/10/10.
 */
var singleScopeModule = angular.module("singleScopeModule",[]);

singleScopeModule.directive("hello",function(){
    return {
        scope : {},
        restrict : 'AE',
        template : '<div><input type="text" class="form-control" ng-model="userName"/>{{userName}}</div>',
        replace : true
    }
});

singleScopeModule.controller("myCtrl",['$scope',
    function ($scope) {
        $scope.ctrlFlavor = "百威";
    }
]);

singleScopeModule.directive("drink", function () {
    return {
        restrict : 'AE',
        scope : {
            flavor : "@"
        },
        template : '<div>{{flavor}}</div>'
        //,
        //link : function (scope, element, attrs) {
        //    scope.flavor = attrs.flavor;
        //}
    }
});

singleScopeModule.directive("meat", function () {
    return {
        restrict : 'AE',
        scope : {
            flavor : "="
        },
        template : '<input type="text" class="form-control" ng-model="flavor"/>'
    }
});

singleScopeModule.controller('greetCtrl',['$scope',
    function ($scope) {
        $scope.sayHello = function (name) {
            alert("Hello, " + name);
        }
    }
]);

singleScopeModule.directive("greeting", function () {
    return {
        restrict : "AE",
        scope : {
            greet : '&'
        },
        template : '<input type="text" ng-model="userName" class="form-control">'+
            '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br>'
    }
})

