var app = angular.module("myApp", []);

//This is how we make controller

app.controller("myController", function($scope) {
	$scope.student = {
		name: "sunny",
		age: 24,
		sex: "male",
		education:"Full stack engineer"
	}
});

//This is how to make a custom directives

app.directive("myDirective", function() {
	return {
		template: "<b> Hey {{student.name}} is {{student.age}} years old.",
		restrict:"E"
	}
});

app.directive("secondDir", function() {
	return {
		template: "<h1>Hello World",
		restrict: "E"
	}
})