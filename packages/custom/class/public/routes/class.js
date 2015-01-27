'use strict';

angular.module('mean.class').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('class example page', {
        url: '/class',
        templateUrl: 'class/views/index.html'
      })
      .state('class index', {
        url: '/class/dos',
        templateUrl: 'class/views/dos.html'
      })
      .state('class create', {
        url: '/class/create',
        templateUrl: 'class/views/create.html'
      });
  }
]);
