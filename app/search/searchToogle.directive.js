'use strict';

angular
  .module('trevor')
  .directive('searchToogle', SearchToogleDirective);

function SearchToogleDirective() {
  return {
    restrict: 'C',
    link: function(scope, menuButton) {
      var form = document.querySelector('form.search');

      menuButton.on('click', toggle);

      function toggle() {
        form.classList.toggle('hidden');
      }
    }
  };
}
