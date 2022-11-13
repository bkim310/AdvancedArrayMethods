
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

const longWords = words.filter(function(word){
    return word.length >= 20; //don't need if/else statements in the return statement
})
//returns arr ['immunoelectrophoretically', 'psychophysicotherapeutics', 'pseudopseudohypoparathyroidism']

const uOrC = words.filter(function(word){
    return word.toLowerCase().includes("u" || "c");
})
//returns arr with words that have u or c in them

const cOrUWords = words.filter(function(w){
    return w[0] === "u" || w[0] === "c";
})

const isVowel = function(char){
    return "aeiou".indexOf(char) !== -1; //helper function to see if the character is a vowel or not
}//


const containsVowel = function(word){
    for (let char of word){
        if(isVowel(char)) return true; //if the character is a vowel, return true
    }
    return false;
}

const containsVowels = words.filter(containsVowel);

const noVowels = words.filter(function(word){
    return !containsVowel(word);
})

/**************************************************USING MAP AND FILTER TOGETHER***********************************************************/

const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
//use filter to create an array of only checked checkboxes

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked; //if the checkbox has the boolean checked, then add to new array
}) //returns the array of the inputs that are checked
//[input, input, input, input]
//in order to show the input content, we use map by figuring out the inner text of the parent element of the checked input

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText; //get the inner text from the parent element of the checkbox
    //returns an array of the checked tasks
})
//["Take out trash", "Cast levitation spell", "Bring home pet kangarooo", "Tell my pet kangaroo a bedtime story"]

function extractCompletedTodos(){
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    Array.from(allCheckboxes).filter(function(box){
        return box.checked;
    }).map(function(checkbox){ //map the array that is a result of filtering out the checked inputs
        return checkbox.parentElement.innerText;
    })//return the text from the inputs
}

/**************************************************MY FILTER***********************************************************/
function myFilter(arr, callback){
    let newArr = []; //create a new array 
    for(let i = 0; i < arr.length; i++){ //loop through the initial array
        if(callback(arr[i], i, arr)){ //if the callback function returns true, 
            newArr.push(arr[i]); //add that value to the new array
        }
    } //do nothing if callback function returns false
    return newArr; //return the final new array with true values
}

const shorties = myFilter(words, function(word){
    return word.length <= 10;
});
//returns all the words in the array that have less than 10 characters

const every0therWord = myFilter(words, function(word, i){
    return i % 2 === 0;
});
//returns every other word in the array using the index that myFilter returns