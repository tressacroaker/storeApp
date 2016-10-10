angular.module("storeApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state("home", {
      url: "/",
      templateUrl: "./templates/home.html"
    })
    .state("shoes", {
      url: "/shoes",
      templateUrl: './templates/shoes.html'
    })
    .state("shirts", {
      url: "/shirts",
      templateUrl: './templates/shirts.html'
    })
    .state("cart", {
      url: "/cart",
      templateUrl: './templates/cart.html'
    });

$urlRouterProvider.otherwise('/');

});
