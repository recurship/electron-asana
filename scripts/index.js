'use strict';


// Declare app level module which depends on views, and components
angular
  .module('asanaChromeApp', ['restangular', 'base64','cgNotify','ngSanitize', 'ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/login', {
          templateUrl: 'scripts/partials/auth.html',
          controller: 'AuthController'
        }).
        when('/', {
          templateUrl: 'scripts/partials/main.html',
          controller: 'MainController'
        }).
        otherwise({
          redirectTo: '/'
        });
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event) {
        console.log($location.path());
        if($location.path() === '/login') {
          return;
        }

        var userPrefs = getValue('userPrefs', function(store) {
          console.log(store);
          if (store.userPrefs && store.userPrefs.apiKey && store.userPrefs.apiKey.length > 0) {
            console.log('ALLOW');
            $location.path('/');
          }
          else {
            console.log('DENY');
            event.preventDefault();
            $location.path('/login');
          }
        });

    });
  }]);
