"use strict";

(function () {
  angular.module('site-manager')
    .directive('pwFooter', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/pw-footer.html'
      };
    });
})();