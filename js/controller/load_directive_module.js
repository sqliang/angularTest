/**
 * Created by dell on 2015/10/10.
 */
var myModule = angular.module("myModule", []);

myModule.controller("loadCtrl",["$scope",
    function ($scope) {
        $scope.loadData = function(){
            console.log("加载中。。。。");
        };
    }
]);

myModule.controller("loadCtrl2",["$scope",
    function ($scope) {
        $scope.loadData2 = function () {
            console.log("2222加载");
        }
    }
]);

myModule.directive("loader",function() {
    return {
        restrict: "AE",
        link: function(scope,element,attr){
            element.bind("mouseenter", function () {
                //scope.loadData();
                scope.$apply(attr.howtoload);
            });
        }
    }
});



