//In JavaScript the value of this not refer to the function in which it is used or it’s scope 
//but is determined mostly by the invocation context of function (context.function()) and where it is called.
//In most cases, the value of this is determined by how a function is called (runtime binding).

function foo(){
	var a =2 ;
	this.bar();
}

function bar (){
	console.log(this.a);
}

foo();   //undefined

// 1- Default Binding:
var myFunction = function() {
    console.log(this);
 }
 
 myFunction();    // Window


 var myFunction = function() {
    console.log(this.a);
 }
 
 var a = 5 ;
 myFunction();    //5  


 

 // 2- Implicit binding
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

obj.foo();  // 2 



var john = {
	name: 'John',
	greet: function(person) {
      console.log("Hi " + person +", my name is " + this.name);
	}
}

john.greet("Mark");  // Hi Mark, my name is John

var fx = john.greet;
fx("Mark");   // Hi Mark, my name is



//3- Explicit Binding:
//     call
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.call(person, ...args); // Alex

//      bind
function greet() {
	console.log(this.name);
}

var person = {
	name:'Alex'
}

greet.apply(person, [args]); // Alex

// new 
function Foo() {        
    /*
       1- create a new object using the object literal 
       var this = {};
   */

  // 2- add properties and methods 
    this.name = 'Osama';
    this.say = function () {
    return "I am " + this.name; 
   };

  // 3- return this;
}

var name = 'Ahmed';
var result = new Foo();
console.log(result.name);  //3


//So You can use bind to returns a function that you can later execute, but Call/apply use it when you need to call the function immediately.

//if you try to use new before arrow function will give an error.because arrow functions can’t run with new.

//So this in arrow function will always take his value from the outside (Lexical scope).