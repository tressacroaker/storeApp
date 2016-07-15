angular.module("storeApp")
.controller("addToCartCtrl", function($scope, mainServ) {
  $scope.message = "Added to Cart";
  $scope.itemincart = function(item, cart){
    mainServ.addToCart(item, cart)
    .then(function(){
      $scope.showmessage = true;

    });
  }

});
