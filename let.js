/*
    Same syntax as var.  Can be used to replace var with let to declare
    a variable, but limit the variable scope to the current code block.

    let declarations are not hoisted to the top.

    If an identifier has already been declared, using the identifier in a let
    declaration will throw an error if tried to be redeclared in the same scope.

 */
"use strict";

function getValue(condition){
    if(condition){
        let value = "blue";
        console.log(value);
        return value;
    }
    else{
        //value doesn't exist here, should throw a reference error.
        console.log(value);
        return null;
    }

    //value doesn't exist here too.
}

getValue("blue");
getValue(0);


function boo(){
    var counter = 10;

    //should throw a syntax error
    let counter = 20;
}


function boo_again(condition){
    var counter = 10;

    //will not throw an error because it's in a different scope.
    if(condition){
        let counter = 20;
    }
}