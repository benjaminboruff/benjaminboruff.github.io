// insert common html snippets
angular.module('common',[])
  .directive('commonNav', function () {
    return {
      restrict: 'E',
      templateUrl: 'site-nav.html',
      controller: function ($location) {// start nav button Controller
        var currentLocation = $location.absUrl().split("/").pop();
        // set nav button as active depending on html file name/location 
        if (currentLocation === 'index.html') {
          this.navBtn = 1; 
        } else if (currentLocation === 'about.html') {
          this.navBtn = 2;
        } else if (currentLocation === 'contact.html') {
          this.navBtn = 3;
        } else {
          this.navBtn = 1;
        }

        this.selectBtn = function (setNavBtn) {
          this.navBtn = setNavBtn;
        };
        this.isSelected = function (checkNavBtn) {
          return this.navBtn === checkNavBtn;
        };
      },// End Panel Controller
      controllerAs: 'navtop'
    };
  })
  .directive('commonFooter', function () {
  return {
    restrict: 'E',
    templateUrl: 'site-footer.html'
  };
});