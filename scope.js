//https://web.programming-hero.com/course/video/web-3-23-7-scope-block-scope-access-outer-scope-variable
//var is motgherfucjer
//hoisting//more at:https://www.thatjsdude.com/jsConcepts/concepts/scope.html
//var can accessible for the parent scope.it's called hoyesting.upper level can acess the value
//let,const isnot allow hoyesting.
//so var is mofo[don't use var]var is real madrid er slave
//var sees slav memes
//that Js dude blows our mind
//that Js Mate

//https://www.thatjsdude.com/jsConcepts/concepts/scope.html
let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    console.log(result);
    if (result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3, 7);
console.log(output);
// https://www.thatjsdude.com/jsConcepts/concepts/scope.html
//hoisting learn here