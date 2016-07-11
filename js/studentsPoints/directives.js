angular.module('Tabs')
.directive('tableWithPoints', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/studentsPoints.html'
  };
});