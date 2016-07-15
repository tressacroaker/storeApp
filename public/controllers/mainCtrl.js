angular.module("storeApp")
.controller("mainCtrl", function($scope, mainServ) {
  $scope.haza = false;
  $scope.postCart = function(){
    mainServ.addCart()
    .then(function(response){
      $scope.cart = response;
    });
  };
  $scope.postCart();

});
