//function declaration
function holler(){
    console.log("HEY YOU!");
}

//function expression
const whisper = function(){
    console.log("psst... hi there");
}
//function can be stored in a variable

/***************************callback functions (passing functions to other functions ie. functions as arguments)****************************/

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function power(x, y){
    return x ** y;
}

//shows function is a value in this array
const mathFuncs = [add, subtract, multiply, divide]
//ie. mathFuncs[3](12, 4) //3 -> it takes the the function at index 3 and executes it with x = 12 and y =4

setTimeout(whisper, 4000) //function is passed in and executed after 4000 ms

function doMath(a, b, mathFunc){
    return mathFunc(a, b);
}
doMath(4, 2, subtract); //2, subtract function is used in place of mathFunc, and accepts a and b

//anonymous function
doMath(3, 4, function(a,b){
    console.log(a ** b);
})

doAllMath(3, 5, mathFuncs)
add(3, 5)
subtract(3, 5)

//looping over mathFuncs array to perform all the operations
function doAllMath(x, y, funcs){
    for(let func of funcs){
        return func(x, y);
    }
}
