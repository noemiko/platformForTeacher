angular.module('Tabs')
.controller('studentsPointsController',[ 'pointsList', function(pointsList) {
  this.sortType     = 'LP'; // set the default sort type
  this.sortReverse  = false;  // set the default sort order
  this.searchFish   = '';     // set the default search/filter term


  pointsList.getData().then(function(data)
    {
      this.students=data['data'];
      var jsonData=JSON.stringify(data);
      console.log(data['data']);
    });

  
}]);