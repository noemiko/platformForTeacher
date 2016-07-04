angular.module('Menu')
.controller('menuController', ['$scope','$http',function ($scope,$http) {
	var menu=this;
		$http({
				  method: 'GET',
				  url: '../php/API/createMenu.php'
				})
  		 .success(function(data, status, headers, config) 
			    {
			    menu.structure=getStrutureMenuFromJson(data);
			    console.table(menu.structure);
				})
  		 .error(function(data, status, headers, config)
  		 		 {
			      alert('Z powodu błędu nie można było załadować piktogramów');
				});
  		
  		getStrutureMenuFromJson=function(data)
  		{
  			menuList={};
  			for (i = 0; i < data.length; i++)
  			{		console.log(data);
  					var item = data[i];
  					var fieldOfStudyWithMode = item[3]+"("+item[4]+")";
  					var group = item[1];
  					var subjectWithType = item[0]+"("+item[2]+")";

  				if (typeof menuList[fieldOfStudyWithMode] != 'undefined')
  				{
  					if (typeof menuList[fieldOfStudyWithMode][group] == 'undefined')
  					{
  						menuList[fieldOfStudyWithMode][group]={subjects: []};
  					}
  					menuList[fieldOfStudyWithMode][group]['subjects'].push(subjectWithType);	
  				}
  				else
  				{	
  					menuList[fieldOfStudyWithMode]={};
  					menuList[fieldOfStudyWithMode][group]={subjects: [subjectWithType]};
  				}
  					
  			};
  			console.log(menuList);
  			return menuList;	
  		};


}]);