'use strict';

angular.module('Tabs')
.controller('studentsRate',[ 'openQuestion','structureOpenQuestion', 'rate','notRateStudents' ,function(openQuestion, structureOpenQuestion, rate, notRateStudents) {
	var question = this;

  	function init() 
	{
		getOpenQuestion();
	};

	init();

	question.update= function(points, idAnswer)
	{	
		rate.send(points,idAnswer);
		
	};
	

	function getOpenQuestion()
	{
	  openQuestion.get().then(function(data)
	    {
	      	var dataQuestion=data;

	      		notRateStudents.getNumber().then(function(data)
					{	
						
					var numberOfNotRateStudentsPerQuestion=notRateStudents.setStructure(data);
					question.structureQuestion = structureOpenQuestion.set(dataQuestion, numberOfNotRateStudentsPerQuestion);
					console.log(question.structureQuestion);
					});
	    });
	};


}]);




