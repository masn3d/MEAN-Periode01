/**
 -In the global execution context (outside of any function),
 this refers to the global object, whether in strict mode or not.

 -Inside a function, the value of this depends on how the function is called.
 if the function is called normally, then this will be set to the global object (window if in a browser).
- When a function is called as a method of an object, its this is set to the object the method is called on.

-------------- call method and apply method ---------------------
 */
 function add(c, d){
  return this.a + this.b + c + d;
}

 var o = {a:1, b:3};

 // The first parameter is the object to use as
 // 'this', subsequent parameters are passed as
 // arguments in the function call
 add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

 // The first parameter is the object to use as
 // 'this', the second is an array whose
 // members are used as the arguments in the function call
 add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

//Note that with call and apply, if the value passed as this is not an object,
//an attempt will be made to convert it to an object using the internal ToObject operation.

/**
-------------- binding method ---------------------
*/
function f(){
    return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};

console.log(o.f(), o.g()); // 37, azerty
//by using f.bind, we define some kind of instance of f() but with a permanent 'this' as being {a:"azerty"} and putting it in
//the variable g. g() will always have {a:"azerty"} as this, while f()'s this will by dynamic.





