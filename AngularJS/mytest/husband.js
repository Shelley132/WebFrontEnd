var myModule = angular.module("MyModule",[]);
myModule.controller('husbandCtrl',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'husband.json'
	}).success(function(data, status, headers, config){
		console.log("娶到老公啦！！！");
		console.log(data);
		$scope.husbands = data;
	}).error(function(data, status, headers, config){
		console.log("老公去哪里啦？怎么娶不到啊！找找他们吧~");
	});
}]);