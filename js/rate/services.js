angular.module('Tabs')
  .factory('openQuestion', function ($http, $routeParams) {
  return {
        get: function() 
        {            
            return $http({
            method: 'POST',
            url: 'php/API/openQuestionSelect.php',
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
  .service('structureOpenQuestion', function ($http) {
     this.set=function(data)
      {
        var questions=data['data'];
        var questionTable={};
        for (i = 0; i < questions.length; i++) 
        { 
          var questionContent = questions[i][4];

          var subRow={};
          subRow.name   =questions[i][0];
          subRow.surname=questions[i][1];
          subRow.idAnswer =questions[i][2];
          subRow.pointsToGet =questions[i][5];
          subRow.points=questions[i][6];
          subRow.answer=questions[i][8];

      
          if (typeof questionTable[questionContent]== "undefined")
          {
            questionTable[questionContent]=[subRow];
          }else
          {
            questionTable[questionContent].push(subRow);
          }
          
        }
        console.log(questionTable);
        return questionTable;
      
      };
    });

  angular.module('Tabs')
  .factory('rate', function ($http) {
  return {
        send: function(points, idAnswer) 
        {
              return $http({
            method: 'PUT',
            url: 'php/API/studentsRateAnswersInsert.php',
            data: getDataToInsertRate(points,idAnswer),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  

          })
          .success(function(data)
           {
          
           })
         .error(function(data, status, headers, config)
          {
              alert('Z powodu błędu nie można było wysłać danych');
          });

        }

      };

      function getDataToInsertRate(points,idAnswer)
      {
            data={};
            data.idAnswer=idAnswer;
            data.numberOfPoints=points;
            return JSON.stringify(data);
      };

});