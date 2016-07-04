angular.module('myApp',[]).
service('groupList',['$http', function($http) {

        return $http({
                  method: 'GET',
                  url: '../php/API/createMenu.php'
                     });
}]);