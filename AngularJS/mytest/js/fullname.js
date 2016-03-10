angular.module("myApp",[]).controller("firstCtr",function($scope){
			$scope.firstName = "利娟";
			$scope.lastName = "刘";
			$scope.fullname = function () {
				return $scope.lastName+$scope.firstName;
			}
});