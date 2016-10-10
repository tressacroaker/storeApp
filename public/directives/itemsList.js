angular.module("storeApp")
.directive("itemsList", function(){
  return {
    templateUrl: './../templates/itemsList.html',
    controller: "mainCtrl",
    restrict: 'AE'
  };
});
