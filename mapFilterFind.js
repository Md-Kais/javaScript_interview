//read Map before to understand this piece of shit.
//array method 1
//this a array method(Array.prototype.map)
//https://www.w3schools.com/jsref/jsref_obj_array.asp
//syntax: array.map(function(currentValue, index, arr), thisValue)
//declare array
let jhan = [1, 2, 3, 4, 5, 6, 7, 8];
//map gives us an another ARRAY
let kar = jhan.map(Math.sqrt);
//so we understand that map gives us an another ARRAY
console.log(kar);
//using arrow function inside map
let bar = kar.map(x => Math.round(x * x));//only x*x gives us wrong ans.
console.log(bar);//[1, 2, 3, 4,5, 6, 7, 8]
//prefix sum
let ans = 0;
let kais = bar.map(function (x) {
    return ans += x;
})
console.log(kais);//[1, 3, 6, 10, 15, 21,28, 36]
console.log(bar);//[1, 2, 3, 4,5, 6, 7, 8]
//that's mean Array.map never change the original array if we don't want to

kais = kais.map(x => x + 10);
console.log(kais);//change tha original array cause we wanted to do that.
//map runs like For-Each loop in c++ ; like:  for(auto e: map){ cout<< e<<endl; }
let kasi=kais.map(x=>x);
console.log(kasi);//make duplicate array
let hasi=kasi.map(()=>5);
console.log(hasi);//make an array same the size as kasi but all element is 5
//map through an array but here we have to convert object to an array
//read all names and make them 
let persons = [
    { firstname: "Mal", lastname: "kom" },
    { firstname: "Kaylee", lastname: "Jenner" },
    { firstname: "Kayne", lastname: "West" }
];
//we can do call a function explicitly
// function getFullName(item) {
//     var fullname = [item.firstname, item.lastname].join(" ");
//     return fullname;
// }

// console.log(persons.map(getFullName));//[ 'Mal kom', 'Kaylee Jenner', 'Kayne West' ]
//but we can do it arrow function more efficiently
let fullName=persons.map( element=> [element.firstname,element.lastname].join(" ")
    //console.log(element);//{ firstname: 'Mal', lastname: 'kom' },{ firstname: 'Kaylee', lastname: 'Jenner' },{ firstname: 'Kayne', lastname: 'West' }
    //console.log(Object.keys(element));//[ 'firstname', 'lastname' ],all the time
    //console log (Object.values(element));//Mal Kom,..............>
    //Object.entries(element)//DIY
    //https://dmitripavlutin.com/access-object-keys-values-entries/   
)

console.log(fullName);
//map ends

//Filter
//syntax:array.filter(function(currentValue, index, arr), thisValue)
let ages=[17,34,23,12,35,89];
let adults= ages.filter((x)=> x>=18);
console.log(adults);
//check kids from adult
let kid = adults.filter((x) => x <= 18);
console.log(kid);//empty array

//Filter Gone

//Find On
//find is a tool invented by SOme fucking Nerds.It's work like filter but insted of giving an array, it's give you the first element.

firstAdult = ages.find((x) => x >= 18);
console.log(firstAdult);//34
firstKid = adults.find((x) => x <= 18);
console.log(firstKid);//undefined Cause of No value there
