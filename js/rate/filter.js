(function() {
  'use strict';

angular.module('Tabs')
  .filter('range', function(){
    return function(n) {
      var res = [];
      for (let i = 0; i < n; i++) {
        res.push(i);
      }
      return res;
    };
  });

}());


