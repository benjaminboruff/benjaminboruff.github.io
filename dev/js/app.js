/// <reference path="../typings/angularjs/angular.d.ts"/>
"use strict";
// Site manager app
(function () {
  angular.module('site-manager', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'angularVideoBg'])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'PortfolioCtrl',
      controllerAs: 'pfctrl'
    }).
      when('/resume', {
      templateUrl: 'partials/resume.html'
    }).
      when('/about', {
      templateUrl: 'partials/about.html'
    }).
      when('/contact', {
      templateUrl: 'partials/contact.html'
    }).
      otherwise({
      redirectTo: '/portfolio'
    });
  }])
    .service('apodService', ['$http', function ($http) {
    this.get = function () {
      //console.log('Hello, from apodService!');
      return $http.get('https://api.nasa.gov/planetary/apod?api_key=ep9KoIgbcqVVVQ7JiLz5vcYql67pTJRPBTeeoIal', {cache: true})
        .then(function (res) {
        return res.data;
      },
        function (err) {
          return {
            message: "There has been an error in your request. Please try again later.",
            error: "Admins are on it!"
          };
        });
    };
  }])
    .controller('PortfolioCtrl', ['apodService', function (apodService) {
    var self = this;
    self.getApodData = function () {
      apodService.get()
        .then(function (apodData) {
        self.apodData = apodData;
        self.video = false;
        if (self.apodData.media_type === 'video') {
          self.video = true;
        }
        //console.log(self.video);
        //console.log(self.apodData.url);
      });
    };
    self.getApodData();
  }])
    .filter('trusted', ['$sce', function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
})();