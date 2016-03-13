var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.sayHello=function(name){
		alert("Hello "+name);
	}
}])
myModule.directive("greeting", function() {
    return {
    	restrict:'AE',
        scope:{
        	greet:'&'
            //实现controller与directive之间的通信
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
        		 '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
    }
});