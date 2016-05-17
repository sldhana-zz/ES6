/*
    Variables declared using const are considered constants.  The value cannot
    be changed once set.  Because of that, it has to be initialized on declaration.

    Constants like let declarations are block level declarations.  Constants
    are no longer accessible once execution flows out of the block in
    which they were declared (not hoisted)

    Const declaration will throw an error if it's redeclared with an already
    defined variable in the same scope.

    Const declaration prevents modification of its binding, not its value.
    For an const declaration of an object, you can make modifications of the
    object.

*/

// Valid constant
const MAX_ITEMS = 30;
console.log(MAX_ITEMS);


// Block level example
if(true){
    const BOO = "FOO";
}
console.log(BOO);


var message = "Hello";
let age = 26;

const message = "Go Daddy";
const age = 10;


const person = {
    name: "Nich"
};

//ok
person.name = "Bing";

//throws an error
person = {
    name: "Gina"
};

//reference error trying to access const before it's declared
if (condition) {
    console.log(typeof value);  // ReferenceError!
    let value = "blue";
}