/*
  Function expressions
*/

var reflect_old = function(value){
  return value;
};

/*
  Arrows a function shorthands using => syntax.

  Even if there isn't an explicit return statement, arrow functions will return
  the first argument passed in.

  If you're passing more than one argument, you must include parentheses surrounding those
  arguments.

  If you want to return an object literal, you need to wrap the literal with a parentheses
  because curly braces are used to denote the function's body.

  If there aren't any arguments, you need to include an empty set of parentheses.

  Unlike functions, arrows share the same lexical this as their surrounding code.

  Cannot be called with new.  They do not have [[Construct]] method and cannot be used as
  constructors.  Will throw an error when used with new.

  No prototype.  Since it cannot be used as a constructor, there is no need for a prototype.
  Prototype property of an arrow function does not exist.

  No arguments object.  Argument binding does not exist, rely on named and rest parameters.

*/

/*
  The above function expression can be simplified to below.
  It takes a single argument and returns it.
*/
var reflect = value => value;
console.log(reflect("boo"));

var sum = (val1, val2) => val1 + val2;
console.log(sum(5,6));

var getAge = () => 10
console.log(getAge());

var userData = (name, age) => ({age: age, name: name});
console.log(userData("Helen", 50));

function Component(){
  var button = document.getElementById("testButton");
  button.addEventListener('click', () => {
    console.log("clicked test button");
    console.log(this);
  });
}

a = new Component();
