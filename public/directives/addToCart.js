angular.module("storeApp")
.directive("addToCart", function(){
  return {
    templateUrl: './../templates/addToCart.html',
    controller: "addToCartCtrl",
    restrict: 'AE'
  };
});
