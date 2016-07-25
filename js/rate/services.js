'use strict';

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
     this.set=function(dataQuestion, numberOfNotRateStudentsPerQuestion)
      {
        var questions=dataQuestion['data'];
        var questionTable={};

        for (let i = 0; i < questions.length; i++) 
        { 
          var questionContent = questions[i][4];
          var idQuestion=questions[i][7];

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
            questionTable[questionContent]["id"]=idQuestion;
            questionTable[questionContent]["notRateStudents"]=
            numberOfNotRateForIdQuestion(idQuestion,numberOfNotRateStudentsPerQuestion);

          }
          else
          {
            questionTable[questionContent].push(subRow);
          }
          
        }
        return questionTable;
      
      };

      function numberOfNotRateForIdQuestion(idQuestion,numberOfNotRateStudentsPerQuestion)
      {
          for (let idQuestionNotRate in numberOfNotRateStudentsPerQuestion) 
                      { 
                        if (idQuestionNotRate==idQuestion)
                        {
                          return numberOfNotRateStudentsPerQuestion[idQuestion];
                        };
                      };
                    };
          return '';
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

         .error(function(data, status, headers, config)
          {
              alert('Z powodu błędu nie można było wysłać danych');
          });

        }

      };

      function getDataToInsertRate(points,idAnswer)
      {
            var data={};
            data.idAnswer=idAnswer;
            data.numberOfPoints=points;
            return JSON.stringify(data);
      };

});

angular.module('Tabs')
  .service('notRateStudents', function ($http,$routeParams) {
  
        this.getNumber=function() 
        { 
              return $http({
            method: 'POST',
            url: 'php/API/notRateStudentSelect.php',
            data:getDataForSelectSQL(),
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}  
          })
         .error(function(data, status, headers, config)
             {
              alert('Z powodu błędu nie można było załadować danych');
          });

        };

        this.setStructure=function(data) 
        { 
          var notRate=data['data'];

          var dataTable= {};
            for (let i = 0; i < notRate.length; i++) 
              { 
                var idQuestion =notRate[i][0];
                var numberOfNotRate =notRate[i][1];
                dataTable[idQuestion]=numberOfNotRate;
              };
          return dataTable;
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



