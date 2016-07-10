angular.module('myApp')
  .factory('groupList', function ($http) {
  return {
        getData: function() 
        {
              return $http({
  				  method: 'GET',
                    url: 'php/API/createMenu.php'
  				})
    		 .error(function(data, status, headers, config)
    		 		 {
  			      alert('Z powodu błędu nie można było załadować piktogramów');
  				});

  		  }

}});

angular.module('myApp')
  .service('structureMenu', function ($http) {
  	 this.setStructure=function(data)
  		{
  			menuList={};
  			data=data.data
  			for (i = 0; i < data.length; i++)
  			{	
  					var item = data[i];
  					var fieldOfStudyWithMode = item[3]+"("+item[4]+")";
  					var group = item[1];
  					var subjectWithType = item[0]+"("+item[2]+")";
            var idGroupLecturerSubject=item[8];

  				if (typeof menuList[fieldOfStudyWithMode] != 'undefined')
  				{
    					if (typeof menuList[fieldOfStudyWithMode][group] == 'undefined')
    					{
    						menuList[fieldOfStudyWithMode][group]={subjects: []};
    					}
  					menuList[fieldOfStudyWithMode][group]['subjects'].push([subjectWithType, idGroupLecturerSubject]);	
  				}
  				else
  				{	
  					menuList[fieldOfStudyWithMode]={};
  					menuList[fieldOfStudyWithMode][group]={subjects: [[subjectWithType,idGroupLecturerSubject]]};
  				}	
  			};
        
  			return menuList;	
  		};
  	});