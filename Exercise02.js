var namesArray = ["Martin", "Hentik", "Bo", "Pjerrot", "Fisk", "Tim"];

function filterCallback(name){

    if(name.length < 4) {
        return true;
    }
}

function mapCallback(name){
return name.toUpperCase();
}

function myCostumFilter(array, callback) {
    var newFilterArray = [];

    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newFilterArray.push(array[i]);
        }
    }
    return newFilterArray;

}
console.log("MyCostumFilter: " + myCostumFilter(namesArray, filterCallback));

function myMap(namesArray, callback) {

    var newMapArray = [];

    for (var i = 0; i < namesArray.length; i++) {

            newMapArray.push(mapCallback(namesArray[i]));

    }
    return newMapArray;
}
console.log("MyCostumMap: " + myMap(namesArray, mapCallback));