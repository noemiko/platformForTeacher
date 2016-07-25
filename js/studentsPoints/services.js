'use strict';
angular.module('Tabs')
  .factory('pointsList', function ($http, $routeParams) {
  return {
        getData: function() 
        {
                        
            return $http({
  				  method: 'POST',
            url: 'php/API/studentsPointsSelect.php',
            data: getDataForSelectSQL(),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  
  				})
    		 .error(function(data, status, headers, config)
    		 		 {
  			      alert('Z powodu błędu nie można było załadować danych');
  				});
  		  }
    };

    function getDataForSelectSQL()
    {
      var data={};
          data.id = $routeParams.id;

          var subject=$routeParams.subject.split("(");

          data.typeOfSubject=subject[1].substr(0,2);

          data.subject=subject[0];

          return JSON.stringify(data);
    };


});

angular.module('Tabs')
  .service('structureStudents', function ($http)
   {
     this.set=function(data)
      {
        var students=data['data'];
        var studentsTable=[];
        for (let i = 0; i < students.length; i++) 
        { 
          var row={};
          row.id=i+1;
          row.name   =students[i][0];
          row.surname=students[i][1];
          row.points =students[i][2];
          studentsTable.push(row);
        }
        return studentsTable;
      
      };
    });