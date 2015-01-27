'use strict';

/* jshint -W098 */
angular.module('mean.book').controller('BookController', ['$scope', 'Global', 'Book',
  function($scope, Global, Book) {
    $scope.global = Global;
    $scope.package = {
      name: 'book'
    };
  }
]);
