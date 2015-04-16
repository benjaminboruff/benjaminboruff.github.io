"use strict";

(function () {
  angular.module('site-manager')
    .directive('pwHeader', ['$location', function ($location) {
      return {
        restrict: 'E',
        templateUrl: 'partials/pw-header.html',
        controller: function () {
          var currentLocation = $location.absUrl().split("/").pop();
          // set nav button as active depending on html file name/location 
          if (currentLocation === 'portfolio') {
            this.navBtn = 1; 
          } else if (currentLocation === 'about') {
            this.navBtn = 2;
          } else if (currentLocation === 'contact') {
            this.navBtn = 3;
          } else {
            console.log(currentLocation);
            this.navBtn = 1;
          }

          this.selectBtn = function (setNavBtn) {
            this.navBtn = setNavBtn;
          };
          this.isSelected = function (checkNavBtn) {
            return this.navBtn === checkNavBtn;
          };
        },
        controllerAs: 'navtop'
      };
    }]);
})();