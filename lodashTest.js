/*
The lodash module for node makes working with arrays and objects easier in javascript.
*/
// Including the lodas module from node.
var lo = require("lodash");

// The range method creates an array within a range of numbers. This should
var arr1 = lo.range(10, 21);
console.log(arr1);

// The indexOf method checks which index a value is found in the array.
console.log("index of 15: " + lo.indexOf(arr1, 15));

// The pull methoed removes all values provided from the specified array.
var arr2 = lo.pull(arr1, 14, 19, 10);
console.log(arr2);
