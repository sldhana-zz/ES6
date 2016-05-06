function oldWay(id, exists){
    if(typeof exists !== 'undefined'){
        doSomethingHere(exists);
    }
}

/*
    ES6 makes it easier to provide default values.

    It is possible to specify default values for any arguments,
    including those that appear before arguments without default
    values.

    The default value will only be used if no argument is passed
    or the parameter is set to undefined explicitly.

    Default parameter values can also be functions instead of just
    primitive values.
*/

function makeRequest(url, timeout=3000, callback){
    console.log(url);
    console.log(timeout);
}

/*
    The default value will be used because undefined is passed in.
*/
makeRequest('/bar', undefined, function(){
   console.log("me");
});


/*
    This will use the default value too.
*/
makeRequest("/bar");

/*
    This will pass null as that's a valid parameter to override
    the default value.

*/

makeRequest('/bar', null, function(){
    "use strict";
    console.log("boo");
});

function mixArgs(first, second ="b") {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d";

    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

mixArgs("a");

mixArgs("a", "b");


function getNum(){
    return 5
}

/*
    Pass a function to the default value
*/
function add(first, second = getNum()){
    console.log(first + second);
    return first + second;
}


/*
    Pass the previous arguments to the default value
*/

function addFunc(first, second = first + 2){
    console.log(first + second);
    return first + second;
}

add(1, 2); // 3
add(2); //7
addFunc(3, 2); // 5
addFunc(3); // 8