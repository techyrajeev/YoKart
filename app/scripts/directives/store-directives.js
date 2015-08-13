'use strict';
/**
 * Created by Rajeev Mishra on 9/8/15.
 */
(function(){

  var app=angular.module("store-directives",[]);

  app.directive('productGallery',function(){
    return{
      restrict:'E',
      templateUrl:'views/html-templates/product-gallery.html',
      controller: function () {
        this.current = 0;
        this.setCurrent = function (newValue) {
          this.current = newValue || 0;
        };
      },
      controllerAs:'gallery'
    };
  });

  app.directive("productTabs",function(){
    return{
      restrict:'E',
      templateUrl:'views/html-templates/product-tabs.html',
      controller:function(){
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs:'tab'
    };
  });

  app.directive('productDescription',function(){
    return{
      restrict:'E',
      templateUrl:'views/html-templates/product-description.html'
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "views/html-templates/product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "views/html-templates/product-specs.html"
    };
  });

})();
