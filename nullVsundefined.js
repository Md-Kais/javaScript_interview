//how many ways to get undefiined values:
//1
let pakhi;
//console.log(pakhi);//undefined cause not to provided value

//2(no retrun )

// function add(num1,num2){
//     console.log(num1+num2);
// }
// const result=add(12,12);
// console.log(result);//undefined cause of not retrun function in previous function

//3(return nothing)

// function add(num1, num2) {
//     console.log(num1+num2);
//     return
// }
// const result=add(12,12);
// console.log(result);//undefined cause of  retrun nothing function in previous function

//4(call something which is not present in function)

// function add(num1,num2){
//     console.log(num2);//undefined cause you don't pas any value
//     return num1+num2;//NaN cause of undefined+number =>?
// }
// const result = add(12);
// console.log(result);//NaN cause of  pass nothing  as num2  in previous function

//5(call somehing which is not present in object)

// const premik={
//     name:'kais',
//     email:'mdkais3@gmail.com' 
// }
// console.log(premik.gf);//undefined cause the object has not any value like this

//6(call somehing which is not present in array)

// const hello=[1,2,3,4,5];
// console.log(hello[1111]);//undefined cause the array has not any value 

//7(declare it by own)

let you=undefined;
console.log(you);//explicitly declared


//NULL (1 way)

//1(explicitly declaring)

let gf=null;
console.log(gf);//null by setting it