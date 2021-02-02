//every number is true unless 0,NULL,NaN;
//every string is true unless string length is 0;
// //falsy
// 0
// ""
// null
// NaN
//false
//and everythying is True
let num=0;
if(num){
    console.log(true);
}
else{
    console.log(false);
}
let name = "0";
if (name) {
    console.log(true);//true cause its now a string and it's not empty string.
}
else {
    console.log(false);
}
let name2 = NaN;
if (name2) {
    console.log(true);
}
else {
    console.log(false);//Not a Number means Falsy
}
let array = [];
if (array) {
    console.log(true);//empty array truthy
}
else {
    console.log(false);
}
let object ={};
if (object) {
    console.log(true);//empty object truthy
}
else {
    console.log(false);
}
let name3=null;
if (name3) {
    console.log(true);
}
else {
    console.log(false);//null means nothing
}