'use strict';

/**
 * @ngdoc function
 * @name yoKartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoKartApp
 */

angular.module('yoKartApp').controller('MainCtrl', function () {
  this.products = toys;
  });

angular.module('yoKartApp').controller('GalleryController', function () {
  this.current = 0;
  this.setCurrent = function (newValue) {
    this.current = newValue || 0;
  };
});

angular.module('yoKartApp').controller('ReviewController', function () {
  this.review = {};
  this.addReview = function (product) {
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);
    this.review = {};
  };
});

angular.module('yoKartApp').controller('TabController', function () {
  this.tab = 1;

  this.setTab = function (newValue) {
    this.tab = newValue;
  };

  this.isSet = function (tabName) {
    return this.tab === tabName;
  };
});

var toys = [
  {
    name: 'Pandora Box',
    description: "Pandora Box",
    details: "This is an ancient wooden pandora box with some magical power.",
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/products/Toy1.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this toy!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This box sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Lovely Teddy',
    description: "Little Teddy with mother teddy bear.",
    details: "Lovely fluffy teddies",
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/products/Toy2.jpg"
    ],
    reviews: [{
      stars: 3,
      body: "I think this teddy was just OK, could honestly add more fluffy thing into it, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "this is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
    }]
  },
  {
    name: 'Child Scooter',
    description: "Be the proud owner of this racing scooter.",
    details: "Brand new foot scooter.",
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/products/Toy3.jpg"
    ],
    reviews: [{
      stars: 1,
      body: "This schooter is WAY too expensive for its value.",
      author: "turtleguyy@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Speed != High Quality.",
      author: "LouisW407@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your money!",
      author: "nat@example.org",
      createdOn: 1397490980837
    }]
  }
];

