angular.module("storeApp")
.directive("itemsList", function(){
  return {
    templateUrl: './../templates/itemsList.html',
    restrict: 'AE',
    controller: 'itemsListCtrl'
  };
});
