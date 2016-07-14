angular.module('Tabs')
  .factory('file', function ($http, $routeParams) {
  return {
        send: function(data) 
        {

            data.idGrupSubjectLecturer = $routeParams.id;
            var jsonData=JSON.stringify(data);
              return $http({
  				  method: 'POST',
            url: 'php/API/fileInsert.php',
            data: jsonData,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

  				})
          .success(function(data)
           {
            alert('Wysłano dane');
           })
    		 .error(function(data, status, headers, config)
    		 	{
  			      alert('Z powodu błędu nie można było wysłać danych');
  				});

  		  }

}});