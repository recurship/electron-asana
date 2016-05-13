angular.module('asanaChromeApp').
controller('AuthController', ['$scope', '$location', function($scope, $location) {
	'use strict';

  $scope.save = function() {
    var value = $scope.apiKey;
    if(value === '') return;

    var generatedId = (new Date()).getTime() + '' + (Math.random() * 19);

    storeValue('userPrefs', { apiKey: value });
    $location.path('/');
  };

}]);
