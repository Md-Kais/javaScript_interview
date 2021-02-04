//function doSomething(x, y = 4) {

// console.log(y);

// }

// doSomething(3, 2);//anmswer:2

//https://www.w3schools.com/jsref/jsref_obj_array.asp

//fill: array.fill(value, start, end)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);//kiwi filled from 2 to 4 index
console.log(fruits);//[ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
fruits.fill("miwi");//miwi fills all index by default
console.log(fruits);//[ 'miwi', 'miwi', 'miwi', 'miwi' ]

//findIndex: array.findIndex(function(currentValue, index, arr), thisValue)

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}
console.log(ages.findIndex(checkAdult));//2 cause 18 is in index number 2


//for each is like, for(auto e: m) in c++;
// see this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


let mofo = [1, 2, 3, 4, 45, 5];
mofo.forEach(Element => console.log(Element));
mofo.forEach(Element => console.log(Element * Element));

//from creates an array from a string: Array.from(object, mapFunction, thisValue)

var myArr = Array.from("ABCDEFG");
console.log(myArr);

//Convert an array to a string:
var x = fruits.toString();//fruits is now a object not an array.
console.log(typeof (x));//string
console.log(typeof (fruits));//object
console.log(x);
//keys , entries is same as Map keys, entries
//entries
var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
var f = fruits.entries();
//then run a for...of loop to see the output
for (e of f) {
    console.log(e);//it's an array object // Object [Array Iterator] 
}
console.log(f);//Object [Array Iterator] {}

//indexOf gives us first index
var a = fruits.indexOf("Apple");
console.log(a);//2 cause apple is in index 2

//lastIndexOf gives us last Index of that elememnt. start:array.lastIndexOf(item, start)

var ab = fruits.lastIndexOf("Apple");
console.log(ab);//4 cause of last index
// if (false) {

//     console.log("I am not false")//it's not false af

// }

// else {

//     console.log("I am false")//it executes

// }
//
if ('false') {

    console.log("I am not false")//it's not empty string. so it executes


}

else {

    console.log("I am false")

}
if (isNaN('')) {

    console.log("I am not false")

}

else {

    console.log("I am false")//it executes. cause  empty string is NaN.

}
if (('')) {

    console.log("I am not false")

}

else {

    console.log("I am false")//it executes. cause undefined is not empty string.

}