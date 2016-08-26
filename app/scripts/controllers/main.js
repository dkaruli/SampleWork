'use strict';

/**
 * @ngdoc function
 * @name workApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workApp
 */
angular.module('workApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
