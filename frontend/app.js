angular.module('flaggingApp', [])
  .controller('FlagController', function($scope, $http) {
    $scope.candidate = {};
    $scope.flags = [];
    $scope.evaluated = false;

    $scope.evaluate = function() {
      $http.post('http://localhost:3000/evaluate', $scope.candidate)
        .then(function(response) {
          $scope.flags = response.data;
          $scope.evaluated = true;
        }, function() {
          alert("Error during evaluation.");
        });
    };

    $scope.save = function() {
      $http.post('http://localhost:3000/save', {
        candidate: $scope.candidate,
        flags: $scope.flags
      }).then(function() {
        alert("Saved successfully.");
      }, function() {
        alert("Failed to save.");
      });
    };
  });