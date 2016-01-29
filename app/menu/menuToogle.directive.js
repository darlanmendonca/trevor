'use strict';

angular
  .module('trevor')
  .directive('menuToogle', MenuToogleDirective);

function MenuToogleDirective() {
  return {
    restrict: 'A',
    link: function(scope, button) {
      var menu = document.querySelector('.menu');
      var menuButton = document.querySelector('.btn-menu');

      button.on('click', toggle);

      function toggle() {
        menuButton.classList.toggle('open');
        menu.classList.toggle('open');
      }
    }
  };
}
