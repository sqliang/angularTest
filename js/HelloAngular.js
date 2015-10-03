function HelloAngular ($scope) {
	$scope.greeting = {
		text:'Hello'
	};
}
function GreetCtrl ($scope,$rootScope) {
	$scope.name = "world";
	$rootScope.department = "Angular";
}
function ListCtrl ($scope) {
	$scope.names = ['Igor','Misko','Vojta'];
}
function testHelloCtrl($scope) {
	$scope.getName = function (){
		return $scope.name;
	};
}