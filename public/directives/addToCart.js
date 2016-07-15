angular.module("storeApp")
.directive("addToCart", function(){
  return {
    templateUrl: './../templates/addToCart.html',
    restrict: 'AE',
    controller: 'addToCartCtrl'
  };
});
