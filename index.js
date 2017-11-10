var binary = require('./search/binary.js');
var selectionSort = require('./sort/selectionSort.js')
var qkSort = require('./sort/qkSort.js')

var a = [1,3,5,7,13,42,66,100]

// console.log(binary.binarySearch(a, 43))


// var a = [3,4334,4,02,94,100,3];
// var b = [333,1];
var c = [333,1,33,5,5893,23,90];
console.log(qkSort.qkSort(c))

// console.log(selectionSort.selectionSort(b))
// module.exports = {
// 	binary: binary
// }