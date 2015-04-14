"use strict";
// Site manager app
(function () {
  angular.module('site-manager',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when ('/portfolio', {
          templateUrl: 'partials/portfolio.html'
        }).
        when ('/about', {
          templateUrl: 'partials/about.html'
        }).
        when ('/contact', {
          templateUrl: 'partials/contact.html'
        }).
        otherwise ({
          redirectTo: '/portfolio'
        });
    }])
    .controller('comNavCtrl', function ($location) {
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
    });
})();