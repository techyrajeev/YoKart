'use strict';
/**
 * Created by Rajeev Mishra on 9/8/15.
 */

angular.module('yoKartApp').factory("ProductDataService",function(){
  var mytoys = [
    {
      toyId:1,
      name: 'Pandora Box',
      description: "Pandora Box",
      details: "This is an ancient wooden pandora box with some magical power.",
      price: 110.50,
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
      toyId:2,
      name: 'Lovely Teddy',
      description: "Little Teddy with mother teddy bear.",
      details: "Lovely fluffy teddies",
      price: 22.90,
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
      toyId:3,
      name: 'Child Scooter',
      description: "Be the proud owner of this racing scooter.",
      details: "Brand new foot scooter.",
      price: 1100,
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
  return {toys:mytoys,
          cart:new shoppingCart("YoKart"),
          getToy:function (toyId) {
            for (var i = 0; i < mytoys.length; i++) {
              if (mytoys[i].toyId == toyId)
                return mytoys[i];
            }
            return null;
          }
  };
});
