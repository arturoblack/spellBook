'use strict';

angular.module('mean.book')
  .factory('BookService', [
    function() {
      return {
        name: 'book'
      };
    }
  ])
  .factory('SpellService', ['$resource',
    function($resource){
      return $resource('/spells/');
    }
  ]);
