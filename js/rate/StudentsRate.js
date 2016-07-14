angular.module('Tabs')
.controller('studentsRate',[ 'openQuestion','structureOpenQuestion', 'rate', function(openQuestion, structureOpenQuestion, rate) {
	var question = this;

  	var init = function () 
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
	      	question.structure=structureOpenQuestion.set(data);
	    });
	};

}]);