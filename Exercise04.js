var a = [6, 9, 4];
var b = [3, 1, 8];

function handleNumArrays(na1, na2, callback) {

    var newArray = [];

    for (var i = 0; i < na1.length; i++) {
        newArray.push(na1[i] + na2[i]);
    }
    callback(newArray);
    return newArray;
};

handleNumArrays(a, b, callbackA);
handleNumArrays(a, b, callbackB);
handleNumArrays(a, b, callbackC);

function callbackA(arr){
    console.log("CallbackA: " + arr);
}

function callbackB(arr){
    var total = 0;
    arr.forEach(function(val) {
        total += val;
    });
    console.log("CallbackB: " + total);
};

function callbackC(arr){
    //forEach methods gives us three arguments we can use in our loop function: Item, index, array. Here I'm using
    //the item and index passed in.
arr.forEach(function(item, index){
   arr[index] = item*10;
});
    console.log("CallbackC: " + arr);
};