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