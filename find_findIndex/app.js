const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];

/*********************find***************************/
// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true at any point, return the value in the array that we’re iterating over
// Otherwise, return undefined
//use when we are trying to determine if a value exists in an array

scores.find(function(score){
    return score > 75;
})
//79, the first value that matches the condition of the callback

scores.find(function(score){
    return score > 100;
})
//undefined, because there is no score above 100

scores.find(function(score){
    return score !== 0 && score % 2 === 0;
})
//88, it is the first value that is even and not 0

const evenScores = scores.filter(function(score){
    return score % 2 === 0;
});
//will return all scores that are even

function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return arr[i];
    }
    return undefined;
}

/*****************findIndex****************************/
// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true for any single value, return the index at which that value is found
// Otherwise, return -1
//if the index of a value in an array exists and we need to use a callback
//use it when indexOf doesn't work (when there are conditions)

const firstEven = scores.findIndex(function(score){
    return score !== 0 && score % 2 === 0;
})
//16, the index of the first time we get an even number that is not 0

function partition (arr, pivot){
    const pivotIdx = arr.findIndex(function(el){
        return el > pivot;
    })
    console.log(pivotIdx);
    const left = arr.slice(0, pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left, right]
}
//to make an array with sub-arrays,
//first element that is greater than the pivot point (we define the pivot point)
//create two new arrays based on the pivot index


function myFindIndex(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return i;
    }
    return -1;
}

