angular.module('Tabs')
.controller('studentsPointsController',[ 'pointsList', 'structureStudents', function(pointsList, structureStudents) {
  var students=this;

  students.sortType     = ''; // set the default sort type
  students.sortReverse  = false;  // set the default sort order
  students.search   = '';     // set the default search/filter term

  	
  	var init = function () 
	{
		setStudentsPoints();
	};
	init();

  function setStudentsPoints()
  {
	  pointsList.getData().then(function(data)
	    {
	      	students.structure=structureStudents.set(data);
	      	
	    });
	};

}]);