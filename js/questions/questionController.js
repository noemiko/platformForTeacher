angular.module('Tabs')
  .controller("questionController", ['questionSend',  function(questionSend) {
    this.data = {};

    this.send = function(question) 
    {
        questionSend.sendData(question);
    };

  }]);