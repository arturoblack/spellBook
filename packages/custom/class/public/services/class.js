'use strict';

angular.module('mean.class')
  .factory('Class', [
    function() {
      return {
        name: 'class'
      };
    }
  ])
  .factory('Classes',['$resource',
    function($resource){
        return $resource('/classes/');
    }
  ]);
  /*
  { 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
  */
