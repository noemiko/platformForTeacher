angular.module('Tabs')
  .factory('pointsList', function ($http, $routeParams) {
  return {
        getData: function() 
        {
          var data={};
          data.id = $routeParams.id;
          data.typeOfSubject='cw';
          data.subject='Programowanie w Javie';
          console.log(data);
          var jsonData=JSON.stringify(data);
          console.log(jsonData);
              return $http({
  				  method: 'POST',
            url: 'php/API/studentsPointsSelect.php',
            data: jsonData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  
  				})
    		 .error(function(data, status, headers, config)
    		 		 {
  			      alert('Z powodu błędu nie można było załadować piktogramów');
  				});

  		  }

}});