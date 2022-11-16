/*********************some******************** */
//loop through array
//run callback (conditional) on each value in arr
//if any value in the arr is true, return true
//else, return false (if every single value is false)
//no if/else statement is necessary in the callback
//have to return the conditional

//example
let numbers = [1, 2, 3];
numbers.some(function(value, index, array){
    return value < 3;
})
//true, bc 1 and 2 are less than 3
numbers.some(function(value, index, array){
    return value > 3;
})
//false, bc no numbers in the numbers arr is above 3

const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

words.some(function(word){
    return words.length > 25;
})
//true, because there is at least one word with more than 25 characters

words.some(function(word){
    return word.indexOf("thyroid") !== -1; //thyroid is in the word
})
//true, because there is at least one word that contains the string "thyroid"

/******************every************************** */
//loop through array
//run callback (conditional) on each value in arr
//if any value in the arr is false, return false
//else, return true (if every single value is true)
//no if/else statement is necessary in the callback
//have to return the conditional

words.every(function(word){
    return words.length > 25;
})
//false, because at least one word is not greater than 25 characters

function allStrings(arr){
    return arr.every(function(word){
        typeof word === "string"; //the values in arr are a string
    })
}
allStrings(words);
//true, bc every value in that arr is a string

//when a user submits a button with a list of checkboxes, lets see if all are checked or not
//if any are not checked, let the user know they need to check all before continuing

const btn = document.querySelector("button");
btn.addEventListener("click", function(e){
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const allChecked = Array.from(checkboxes).every(function(checkbox){
        return checkbox.checked;
    })
    console.log(allChecked);//true only if all checkboxes are checked
    if(!allChecked) alert("PLEASE AGREE TO EVERYTHING!"); //if all not checked, alert user
})

function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;//if any are true, return true
    }
    return false;//if none are true, return false
}

function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;//if any value is false, return false
    }
    return true;//if all values are true, return true
}