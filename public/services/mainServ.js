angular.module("storeApp")
.service("mainServ", function($http) {
  this.addCart = function(){
    return $http({
      method: "POST",
      url: "/cart"
    }).then(function(response){
      return response.data;
    });
  };
  this.getThings = function(){
    return $http({
      method: "GET",
      url: "/widget"
    }).then(function(response){
      return response.data;
    })
  }
  this.addToCart = function(item, cart){
    var newcart = cart;
    newcart.items.push(item);
    newcart.totalCost += item.cost;
    return $http({
      method: "PUT",
      url: "/cart/" + cart._id,
      data: newcart
    }).then(function(response){
      return response.data;
    })
  }
});
