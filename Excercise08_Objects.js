var myObject = {
    name: "Martin",
    age: 30,
    hobbies: ["Gaming", "Fitness", "Kung-Fu", "Tinder"],
    email: "masn45@hotmail.com"
};

console.log("-------------------------------------");


//For-in loop. info is each propertie and myObject is the object in question.
for (info in myObject) {
    console.log(info + ": " + myObject[info]);
}

//deletes the propery hobbies from myObject
delete myObject.hobbies;

console.log("\nAfter using the delete operator: ");
for (info in myObject) {
    console.log(info + ": " + myObject[info]);
}

console.log("----------------------------------------------------------")
//hasOwnProperty
    if (myObject.hasOwnProperty('name')) {
        console.log("name: " + myObject['name']);
    }
    if (!myObject.hasOwnProperty('Car')) {
        console.log("Property does not exist!");
    }

//Constructor Function: Makes an object for you. 





