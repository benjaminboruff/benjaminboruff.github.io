// insert common html snippets
angular.module('common',[])
  .directive('commonNav', function () {
    return {
      restrict: 'E',
      templateUrl: 'site-nav.html'
    };
  })
  .directive('commonFooter', function () {
  return {
    restrict: 'E',
    templateUrl: 'site-footer.html'
  };
});