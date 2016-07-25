'use strict';
  angular.module('Tabs')
  .controller("tabController",['$routeParams', function($routeParams) {
    this.tab = 1;

    this.actualFieldOfStudy=$routeParams.fieldOfStudy;
	this.actualGroup=$routeParams.group;
	this.actualSubject=$routeParams.subject;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };


  }]);