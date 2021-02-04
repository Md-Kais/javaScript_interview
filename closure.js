//https://www.thatjsdude.com/jsConcepts/concepts/scope.html
//https://www.thatjsdude.com/images/scope/closureTwoFunc.png

//panda-designeer
//definition:
//if you a function within a function , execution of the inner function will create a scope inside of the outer function-a nested scope.Because the inside function is enclosed by outer function scope,the inner function is called a closure. TO be a closure, you don't have to return a function. you just call a function inside a function to make a closure.

function a() {
    function b() {
        console.log('closure');
    }
    b(); //creates closure
    return false;//to skip undefined replying
}
//you call a function inside a function. so, you call the outer function is or not . the inner function execute.

//make a complex closure function;

function panda() {
    let penty = 0;
    return function() {
        penty++;
        return penty;
    }
   
    

   
}
const penty1 = panda();
console.log(penty1());
console.log(penty1());
console.log(penty1());
console.log(penty1());
console.log(penty1());


const penty2=panda();
console.log(penty2());
console.log(penty2());
console.log(penty2());

console.log(penty1());

///fuck you closure.