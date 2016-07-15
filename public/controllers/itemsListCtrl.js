angular.module("storeApp")
.controller("itemsListCtrl", function($scope, mainServ, $state) {
  $scope.items = [];
  $scope.getItems = function(){
    mainServ.getThings()
    .then(function(response){
      console.log(response);
      for(var i = 0; i < response.length; i++){
        if(response[i].type === $state.current.name){
          $scope.items.push(response[i]);
        }
      }
    });
  };
  $scope.getItems();


});
