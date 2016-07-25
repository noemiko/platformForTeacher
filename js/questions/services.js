(function() {
  'use strict';

 angular.module('myApp')
  .factory('questionSend', function ($http, $routeParams) {
  return {
        sendData: function( data) 
        {
          data.group = $routeParams.id;
          const jsonData=JSON.stringify(data);
              return $http({
            method: 'POST',
            url: 'php/API/sendQuestion.php',
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
}());


