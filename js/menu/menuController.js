angular.module('Menu')
.controller('menuController', ['$scope','$http','$routeParams', 'groupList', 'structureMenu' ,
function ($scope,$http, $routeParams, groupList, structureMenu) {
	var menu=this;

  groupList.getData().then(function(d){
    menu.structure=structureMenu.setStructure(d);
  });
     


  		



 


}]);