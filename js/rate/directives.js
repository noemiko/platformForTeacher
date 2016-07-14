angular.module('Tabs')
.directive('rateStudents', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/studentsRate.html',
    controller:"studentsRate",
    controllerAs:"rate"
  };
});