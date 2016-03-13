var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{
        	flavor:'@'
        },
        template:"<div>{{flavor}}</div>"
        // ,
        // link:function(scope,element,attrs){
        // 	scope.flavor=attrs.flavor;
        // }
        //以上表示把指令中的flavor给scope中的flavor
    }
});