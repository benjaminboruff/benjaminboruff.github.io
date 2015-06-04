"use strict";
// Site manager app
(function () {
  angular.module('site-manager',['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when ('/portfolio', {
          templateUrl: 'partials/portfolio.html',
          controller: 'PortfolioCtrl',
          controllerAs: 'pfctrl'
        }).
        when ('/resume', {
          templateUrl: 'partials/resume.html'
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
    .service('apodService', ['$http', function ($http) {
      this.get = function() {
        //console.log('Hello, from apodService!');
        return $http.get('https://api.data.gov/nasa/planetary/apod?api_key=ep9KoIgbcqVVVQ7JiLz5vcYql67pTJRPBTeeoIal&format=JSON')
          .then(function(res) {
            return res.data;
          });
      };
    }])
    .controller('PortfolioCtrl', ['apodService', function (apodService) {
      var self = this;
      self.getApodData = function(){
        apodService.get()
          .then(function(apodData){
            self.apodData = apodData;
            //console.log(self.apodData);
          });
      };
      self.getApodData();
    }]);
})();