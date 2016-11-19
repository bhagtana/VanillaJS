angular.module("Todo", []).
    controller("TodoCtrl", function($scope) {
      $scope.todos = [
      	{"title":"Welcome to angular", "done":false}
      ];

      $scope.addTodo = function() {
      	$scope.todos.push({"title":$scope.newTodo, "done": false});
      	$scope.newTodo = "";
      }

      $scope.clearTodo = function() {
      	$scope.todos = $scope.todos.filter(function(item) {
      		return !item.done;
      	});
      }
    })
