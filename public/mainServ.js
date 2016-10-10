angular.module("storeApp")
.service("mainServ", function($http){

this.items = [{
  type: "shoes",
  list: [{
    name: "Heels",
    cost: "$20",
    img: "https://static.heels.com/heels3/filterimg/pumps.jpg"
  }, {
    name: "Boots",
    cost: "$40",
    img: "http://btspotlight.org/wp-content/uploads/2014/10/warmth-boot.jpg"
  }, {
    name: "Slippers",
    cost: "$10",
    img: "http://www.thinkgeek.com/images/products/zoom/1cf9_shark_plush_slippers.jpg"
  }]
},{
  type: "shirts",
  list: [{
    name: "Tank Top",
    cost: "$20",
    img: "https://s-media-cache-ak0.pinimg.com/236x/53/ab/4c/53ab4cadeea2d26284c6a6b3305da20f.jpg"
  }, {
    name: "Short Sleeve",
    cost: "$30",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdxmB9nx7qJto5-f3nUm0DkkfptLOmBVH30IoqW8QglkXbP8p3"
  }, {
    name: "Long Sleeve",
    cost: "$40",
    img: "http://ecx.images-amazon.com/images/I/61SKJVAjPqL._UL1500_.jpg"
  }]
}];

// this.getPoke = function(){
//   return $http({
//     method: "GET",
//     url: "http://pokeapi.co/api/v2/pokemon"
//   }).then(function(response){
//     return response.data.results;
//   });
// }



});
