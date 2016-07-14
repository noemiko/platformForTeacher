angular.module('Tabs')
.controller('studentsRate',[ 'openQuestion','structureOpenQuestion', function(openQuestion,structureOpenQuestion) {
	var question = this;
  	
  	var init = function () 
	{
		getOpenQuestion();
	};
	init();

	question.getNumber = function(num)
	 {
    return new Array(num);   
	};

	question.update= function()
	{
		console.log("klik")
	};

	function getOpenQuestion()
	{
	  openQuestion.get().then(function(data)
	    {
	      	question.structure=structureOpenQuestion.set(data);
	    });
	};

}]);