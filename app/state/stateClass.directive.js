'use strict';

angular
  .module('trevor')
  .directive('stateClass', StateClassDirective);

function StateClassDirective($state) {
  return {
    link: function(scope, element) {
      let state = $state.current.name.replace(/\./g, '-');
      let className = `state-${state}`;

      element.addClass(className);
    }
  };
}
