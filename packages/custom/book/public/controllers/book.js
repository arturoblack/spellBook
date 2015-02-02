'use strict';

/* jshint -W098 */
angular.module('mean.book').controller('BookController', ['$scope', 'Global', 'SpellService',
  function($scope, Global, SpellService) {
    $scope.global = Global;
    $scope.package = {
      name: 'book'
    };
    $scope.getList = function(){
      SpellService.query()
        .$promise.then(
          function(data){
            $scope.spells = data;
          },
          function(error){
            console.log('error', error);
          }
        );
    };
    $scope.create = function(isValid) {
      console.log('create');
      if (isValid) {
        var spell = new SpellService({
          name:this.name,
          tag: this.tag,
          school: this.school,
          casting_time: this.casting_time,
          range: this.range,
          level: this.level,
          components: {
              verbal:this.verbal,
              somatic:this.somatic,
              material:this.material,
          },
          duration: this.duration,
          description: this.description
        });
        console.log(spell);
        spell.$save(function(response) {
            console.log('finish', response);
        });

        this.name = '';
        this.description = '';
      } else {
        console.log('not valid');
        $scope.submitted = true;
      }
    };
  }
]);
