let array=[1,2,3,4,5,6,7,8,9];
//slice :array.slice(start, end)
//slice doesn't change the original array
let slicer=array.slice(2,5);//start from 2 and ends in index 5;2->5
console.log(slicer);

//splice: array.splice(index, howmany, item1, ....., itemX)
//splice change the original array.
console.log(array);
// let splicer=array.splice(2,4);
// console.log(splicer);
// console.log(array);
//change the array
let splicer = array.splice(2, 4,34,3434,34,12323);
console.log(splicer);
console.log(array);
//see more https://www.w3schools.com/jsref/jsref_splice.asp


//join: array.join(separator)
let answer=array.join('kaods');//makes a string.
console.log(answer);
console.log(array);
//doesn't change the original element
l