'use strict';

/* jshint -W098 */
angular.module('mean.class').controller('ClassController', ['$scope', '$state', 'Global', 'Classes',
  function($scope, $state, Global, Classes) {
    $scope.global = Global;
    $scope.package = {
      name: 'class'
    };
    console.log('index class');
    $scope.getList = function(){
      Classes.query()
        .$promise.then(
          function(data){
            console.log('success', data);
            $scope.classes = data;
          },
          function(error){
            console.log('error', error);
         }
        );
    };
    $scope.create = function(isValid) {
      if (isValid) {
        var clase = new Classes({
          name: this.name,
          description: this.description
        });
        clase.$save(function(response) {
          console.log('finish', response);
        });

        this.name = '';
        this.description = '';
      } else {
        $scope.submitted = true;
      }
    };
  }
]);
