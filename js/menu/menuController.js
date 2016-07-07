angular.module('Menu')
.controller('menuController', ['$scope','$http','groupList', 'structureMenu' ,
function ($scope,$http, groupList, structureMenu) {
	var menu=this;
	var init = function () 
	{
		createStructureData();
	};
	init();
	

	function createStructureData()
	{
	  groupList.getData().then(function(data)
	  {
	    menu.structure = structureMenu.setStructure(data);
	  });
	 };

}]);