//Immediately Invoked Function Expressions

/**
 We use Immediately Invoked Functions when we want to create privacy for our functions and variables.

 It is to create its own scope. It is not only better because you no longer "pollute" some
 other (global, for example) scope,it gives you guaranteed escape for name collision concerns and defense
 from programmers that like to poke inside internals of your functions/objects/methods too much among all
 the benefits. It also allows GC to  easily understand that you don't need any of referenced objects
 anymore when function is done.
 * */


//this is with return value.
(function(){ return a })();

//these are without. They all do the same. Similar to void method in regualr java.
!function () { /* code */
}();
~function () { /* code */
}();
- function () { /* code */
}();
+ function () { /* code */
}();