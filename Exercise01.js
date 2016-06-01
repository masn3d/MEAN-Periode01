// Difference between Map and Filter is, that map returns array with all values. Filter returns array with values
//that you specify should be returned.

//Filter
var array = ["Martin", "Hentik", "Bo", "Pjerrot", "Fisk", "Tim"];

var filterArray = array.filter(function(name){

  if(name.length < 4) {
   return name;
  }

});
console.log("FilterArray: " + filterArray);

//Map

var mapArray = array.map(function(name){
    return name.toUpperCase();
});
console.log("MapArray: " + mapArray);

