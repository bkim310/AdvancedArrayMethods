//my version of map without using map... lol
function myMap(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

//map creates a new arr, runs a callback function on the initial arr, and returns the new arr with those modified values

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
}) 
//negatives: [-21, -37, -64, -99, -142]

const doubles = numbers.map(function(num){
    return num * 2
})
//arr with numbers doubled

const todos = [
    {
        id: 1,
        text: "walk the dog",
        priority: "high"
    },
    {
        id: 2,
        text: "walk the cat",
        priority: "low"
    },
    {
        id: 3,
        text: "walk the chicken",
        priority: "medium"
    },
    {
        id: 4,
        text: "walk the human",
        priority: "highest"
    }
]
todos.map(function(todo){
    return todo.text;
})
//returns an array with the values that have the key of text
//["walk the dog", "walk the cat", "walk the chicken", "walk the human"]

const links = document.querySelectorAll("a");
const realLinks = Array.from(links); //turns links into an array from a nodeList
const urls = realLinks.map(function(a){
    return a.href;
})
//returns an array of all the links from our anchor tags