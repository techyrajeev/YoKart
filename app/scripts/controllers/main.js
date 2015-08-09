'use strict';

/**
 * @ngdoc function
 * @name yoKartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoKartApp
 */

angular.module('yoKartApp').controller('MainCtrl',["$routeParams","ProductDataService",function ($routeParams,ProductDataService) {

  this.products=ProductDataService.toys;
  this.yoKart=ProductDataService.cart;
}]);


angular.module('yoKartApp').controller('ReviewController', function () {
  this.review = {};
  this.addReview = function (product) {
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {};
  };
});
