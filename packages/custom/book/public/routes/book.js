'use strict';

angular.module('mean.book').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('book example page', {
        url: '/book/example',
        templateUrl: 'book/views/index.html'
      })
      .state('book create page', {
        url: '/book/create',
        templateUrl: 'book/views/create.html'
      });
  }
]);
