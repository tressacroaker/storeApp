angular.module("storeApp")
.directive("itemsList", function(){
  return {
    templateUrl: 'angular/itemsList.html',
    restrict: 'AE'
  };
});
