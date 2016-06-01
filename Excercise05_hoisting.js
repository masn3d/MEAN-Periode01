//HOISTING

/**
Variable hoisting refers to that fact that al declarations in javascript are hoisted to the top of the function.
However, this is not the case with the initialisation.
In 'var x = 10;' the 'var x' will be hoisted to the top, but the '= 10' will not...

So that covers variable hoisting, but what about function hoisting?
Despite both being called "hoisting" the behavior is actually quite different.
Unlike variables, a function declaration doesn't just hoist the function's name.
It also hoists the actual function definition -> myFunction(){ //code }:

However! If function is defined in a variable, then
this will not be the case, like so -> 'var myFunction = someFunction() { //some code }'
The declaration 'var myFunction' will be hoisted but not the function itself.

 Good design rule -> put all declarations in the top of the function!
*/



console.log("-------------------Variable Hoisting------------------------");
//Example of variable hoisting:

console.log("before initialisation: " + x);

x = 10;

console.log("after initialisation: " + x);

var x;

console.log("-------------------Function Hoisting------------------------");
//Example of function hoisting:

myFunction();
console.log(myOtherFunction);

function myFunction(){ console.log("Jeg vil hellere ha' en Star!")}

var myOtherFunction = function mynewFunction(){ console.log("Han vil hellere, han vil meget hellere ha' en Staaaar!")}
