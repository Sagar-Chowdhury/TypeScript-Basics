"use strict";
//explicit type annotations
function add(a, b) {
    return a + b;
}
//Function with optional parameters
function greet(name, age) {
    if (age) {
        console.log('Hello, ${name}! You are ${age} years old.');
    }
    else {
        console.log('Hello, ${name}!');
    }
}
//with default parameter values.
function multiply(a, b = 1) {
    return a * b;
}
//with rest parameters
//Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));
//generic function in tyepscript.
function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
const numbers = [1, 2, 3, 4, 5, 6];
swap(numbers, 0, 1);
console.log(numbers);
const names = ["Alice", "Bob", "Charlie"];
swap(names, 0, 2);
console.log(names);
