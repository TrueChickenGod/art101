/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 7, 2022
 * Lab 8: Anon Functions and Callbacks
 */

var numArray = [33, 45, 99, 12, 18, 00, 51];

//create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function numAddition(x) {
    return (x + 10)
}
//console.log tests
console.log("33 + 10 is: ", numAddition(33));
console.log("00 + 10 is: ", numAddition(00));
console.log("22 + 10 is: ", numAddition (22));


//Use map on your array using your function as a callback to operate on all the numbers in your array.
var result = numArray.map(numAddition);
  //should return all numbers in numArray + 10
  console.log("Test of numAddition of array: ", result);


//Now use a new anonymous function as a callback with map to do some new operation on each of the numbers in your array. (Multiplication)
var result = numArray.map(function(x){
    return (x * 10);
})
  //should return all numbers in numArray * 10
  console.log("Test of anonymous function of array: ", result);
