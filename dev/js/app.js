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
    }]);
})();