angular.module('Menu')
.controller('menuController', ['$http','groupList', 'structureMenu' ,
function ($http, groupList, structureMenu) {
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
	    console.log(menu.structure);
	  });
	 };

}]);