angular.module("storeApp")
.controller("mainCtrl", function($scope, $state, mainServ){
console.log($state.current.name);
$scope.merch = mainServ.items;
for (var i = 0; i < $scope.merch.length; i++) {
  if($state.current.name == $scope.merch[i].type){
    $scope.merchlist = $scope.merch[i].list;
  }
}


});
