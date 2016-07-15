angular.module("storeApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: './templates/home.html'
  })
  .state("apparel", {
    url: "/apparel",
    templateUrl: './templates/apparel.html'
  })
  .state("shoes", {
    url: "/shoes",
    templateUrl: './templates/shoes.html'
  })
  .state("toilets", {
    url: "/toilets",
    templateUrl: './templates/toilets.html'
  })
  .state("toothcare", {
    url: "/toothcare",
    templateUrl: './templates/toothcare.html'
  })
  .state("cart", {
    url: "/cart",
    templateUrl: './templates/cart.html'
  });

  $urlRouterProvider.otherwise('/')
});
