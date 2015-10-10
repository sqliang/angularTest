var  myModule = angular.module("MyModule",[]);

myModule.controller("helloAngular",['$scope',function HelloAngular($scope){
	$scope.greeting = {
		text : "Hello"
	};
}]);

myModule.controller("greetCtrl",['$scope','$rootScope',function greetCtrl ($scope,$rootScope) {
	$scope.name = "World";
	$rootScope.department = "Angular";	
}]);

myModule.controller('listCtrl',['$scope',function listCtrl ($scope) {
	$scope.names = ["HW","Sqliang","hehe","World"];
}]);

myModule.controller('hehe',function($scope){
	$scope.hehes = ['woca','hhe','haha'];
});

myModule.directive("hello",function (){
	return {
		restrict:"AEMC",
		template:'<div>Hello EveryOne!<div ng-transclude></div></div>',
		//replace:true
		transclude: true
	}
});

myModule.directive('hahacom', function () {
	return {
		restrict: "AEMC",
		templateUrl: 'tpls/compotent.html',
		replace: true,
		link : function(){
			//一般用来操作DOM，首先可以给DOM去绑定一些事件监听器；还可以绑定作用域
		}
	}
});