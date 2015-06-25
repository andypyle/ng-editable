app = angular.module('editApp', []);

app.directive('makeEditable', function(){
	return {
		restrict: 'A',
		templateUrl: 'editable-directive.html',
		transclude: true,
		scope: true
	}
});