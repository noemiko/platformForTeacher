angular.module('Tabs')
.directive('questionAddForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/addQuestion.html'
  };
});