var expModule=angular.module('expanderModule',[])
expModule.directive('accordion', function() {
	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
		template : '<div ng-transclude></div>',
		controller : function() {
			var expanders = [];
			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if (selectedExpander != expander) {
						expander.showMe = false;
					}
				});
			}
			//遍历expanders中的元素，如果不是被选中的expander，则隐藏；否则不隐藏。
			this.addExpander = function(expander) {
				expanders.push(expander);
			}
			//向expanders中压入新的expander
		}
	}
});

expModule.directive('expander', function() {
	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
		require : '^?accordion',
		//依赖于外部的accordion
		scope : {
			title : '=expanderTitle'
		},
		//将title进行绑定
		template : '<div>'
				  + '<div class="title" ng-click="toggle()">{{title}}</div>'
				  + '<div class="body" ng-show="showMe" ng-transclude></div>'
				  + '</div>',
		link : function(scope, element, attrs, accordionController) {
			scope.showMe = false;
			accordionController.addExpander(scope);
			scope.toggle = function toggle() {
				scope.showMe = !scope.showMe;
				accordionController.gotOpened(scope);
			}
		}
	}
});

expModule.controller("SomeController",function($scope) {
	$scope.expanders = [{
		title : 'Click me to expand',
		text : 'Hi there folks, I am the content that was hidden but is now shown.'
	}, {
		title : 'Click this',
		text : 'I am even better text than you have seen previously'
	}, {
		title : 'Test',
		text : 'test'
	}];
});
