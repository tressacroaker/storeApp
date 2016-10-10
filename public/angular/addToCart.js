angular.module("storeApp")
.directive("addToCart", function(){
  return {
    templateUrl: 'angular/addToCart.html',
    restrict: 'AE'
  };
});
