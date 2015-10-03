function namesController ($scope) {
	$scope.names = [
		{
			name : 'Jani',
			country : 'Norway',
		},{
			name : 'Hege',
			country : 'Sweden'
		},{
			name : 'Kai',
			country : 'Denmark'
		}
	];
	$scope.name = {
		name : 'sqliang',
		country : 'China'
	};
	$scope.varOfObj = function(){
		var name = $scope.name;
		var result = "";
		for (var i in name) {
			if (name.hasOwnProperty(i)) {
				result += name[i] + " ";
			}
		}
		return result;
	};
	$scope.arryOfObj = function(){
		var names = $scope.names;
		var result = "";
		for (var i = 0; i < names.length; i++) {
			for (var index in names[i]) {
				result += index[i];
			}
		};
		return result;
	};
}