(function () {
  angular.module('site-manager')
    .directive('commonFooter', commonFooter);

// named functions
  function commonFooter() {
    return {
      restrict: 'E',
      templateUrl: 'site-footer.html'
    };
  }
  
})();