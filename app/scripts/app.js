'use strict';

/**
 * @ngdoc overview
 * @name yoKartApp
 * @description
 * # yoKartApp
 *
 * Main module of the application.
 */
angular
  .module('yoKartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'store-directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cart',{
        templateUrl:'views/shoppingCart.html',
        controller:'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

