/**
 * Created by dell on 2015/10/10.
 */
var superManModule = angular.module("superManModule", []);

superManModule.directive("superman",function(){
    return {
        scope:{},
        restrict:'AE',
        controller: function($scope){
            $scope.abilities = [];
            this.addStrength = function () {
              $scope.abilities.push("strength");
            };
            this.addSpeed = function () {
                $scope.abilities.push("speed");
            };
            this.addLight = function () {
                $scope.abilities.push("light");
            };
        },
        link : function (scope, element, attrs) {
            element.addClass("btn btn-primary");
            element.bind("mouseenter", function () {
                console.log(scope.abilities);
            });
        }
    }
});

superManModule.directive("strength", function () {
    return {
        require : '^superman',
        link : function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addStrength();
        }
    }
});

superManModule.directive("speed", function () {
    return {
        require : "^superman",
        link : function (scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    }
});

superManModule.directive("light", function () {
    return {
        require : '^superman',
        link : function (scope,element,attrs,supermanCtrl) {
            supermanCtrl.addLight();
        }
    }
});


