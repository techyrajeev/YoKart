'use strict';
/**
 * Created by Rajeev Mishra on 9/8/15.
 */

/**
 * @ngdoc function
 * @name yoKartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoKartApp
 */

angular.module('yoKartApp').controller('MainCtrl',["$routeParams","$location","ProductDataService",function ($routeParams,$location,ProductDataService) {

  this.products=ProductDataService.toys;
  this.yoKart=ProductDataService.cart;
  this.isOrderSuccess=false;
  this.go=function(path){
    this.yoKart.checkout();
    $location.path(path);
  }
}]);


angular.module('yoKartApp').controller('ReviewController', function () {
  this.review = {};
  this.addReview = function (product) {
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {};
  };
});
