angular.module('myApp', ['Menu','ngRoute'])
	.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/start.html',
     
      })
      .when('/groups/:fieldOfStudy/:group/:subject', {
        templateUrl: 'partials/contentGroups.html',
       controller:'menuController',
       controllerAs:'menu'
      })
      .otherwise({
        redirectTo: '/'
      });

  
  });



angular.module('Menu', []);