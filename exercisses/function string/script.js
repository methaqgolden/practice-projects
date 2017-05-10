function numToString(num) {
    console.log(typeof(num.toString()))
    return num.toString();

}
console.log(numToString(200));

// Write a function that when a number is passed in it return it in a string.
//
// function numToString(3) => '3'
//
// function numToString(46) => '46'

// write a function that when passed an array of numbers
// it will square root the numbers and return the sum of the square rooted numbers

// function squareAndSum([1, 2, 2]) => 9
//
// function squareAndSum([2, 2, 3]) => 17
function squareAndSum(arr) {
  var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum
}
console.log(squareAndSum([1, 2, 2]));
