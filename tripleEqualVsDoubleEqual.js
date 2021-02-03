//tripleEqualVsDoubleEqual
//popular interview ques
//double equal never check data type of this variable{values};
//triple equal checks {data type+value}(strictly checks)

const first=0;
const second=false;
if(first==second){
    console.log('double match');//double match cause 0 means false
}
if(first===second){
    console.log('triple match');//0 is number and false is boolean type(never match);
}
const kais=1;
const kice='1';
if (kais==kice) {
    console.log('double match'); //value matches
}
if (kais===kice) {
    console.log('triple match');//triple never match cause kais is number and kice is boolean
}
//ALL  triple match is double match  but all double match isnot triple match
//as a jr. ,you use triple equal
const rais = 1;
const rice = 1;
if (kais == kice) {
    console.log('double match'); //value matches
}
if (rais === rice) {
    console.log('triple match');//triple matches cause of datatype+value
}