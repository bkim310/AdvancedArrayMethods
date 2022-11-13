const colors = ["teal", "cyan", "peach", "purple"];

colors.forEach(function(val, i, arr){
    console.log(val.toUpperCase()); //logs the values of the array in uppercase
    console.log(i); //logs the indices in the array
    console.log(arr); //logs the array
});
//iterates through the array
//first argument is "teal" (value)
//second argument is the index
//third argument is the entire array
//usually inline anonymous functions

const prices = [30, 99, 19.99, 2.50, 99];
let total = 0;
prices.forEach(function(price){
    total += price;
})
console.log(total);
//why use this over a for/of loop? because for/of didn't exist when forEach was released

function myForEach(arr, callback){
    for(let i = 0; i < arr.length; i++){ //loop through the array
        callback(arr[i], i, arr); //return the value, index, and whole array through our callback function
        return undefined; //return undefined
    }
}