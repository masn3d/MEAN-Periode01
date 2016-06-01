var namesArray = ["Martin", "Hentik", "Bo", "Pjerrot", "Fisk", "Tim"];

function filterCallback(name) {

    if (name.length < 4) {
        return true;
    }
}
function mapCallback(name) {
    return name.toUpperCase();
}

//Filter Prototype
Array.prototype.myNewFilter = function (callback) {

    var newFilterArray = [];

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newFilterArray.push(this[i]);
        }
    }
    return newFilterArray;

};

console.log("MyCostumFilterPrototype: " + namesArray.myNewFilter(filterCallback));


//Map Prototype

Array.prototype.myNewMap = function (callback) {

 var newMapArray = [];

 for (var i = 0; i < this.length; i++) {

 newMapArray.push(mapCallback(this[i]));

 }
 return newMapArray;
 }
 console.log("MyCostumMapPrototype: " + namesArray.myNewMap(mapCallback));
