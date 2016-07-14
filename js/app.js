angular.module('myApp', ['Menu','ngRoute','Tabs','thatisuday.dropzone','ngRateIt'])
	.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/start.html',
     
      })
      .when('/groups/:fieldOfStudy/:group/:subject/:id', {
        templateUrl: 'partials/contentGroups.html',
       controller:'tabController',
       controllerAs:'tab'
      })
      .otherwise({
        redirectTo: '/'
      });

      
  
  });



angular.module('Menu', []);
angular.module('Tabs', []);