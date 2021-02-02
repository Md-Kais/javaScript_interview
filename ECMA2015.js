//let is leakproof and changeable;
//please use let instead of var
for (let i = 0; i < 4; i++) {
    console.log(i);
}
//console.log(i); give us error cause of undeclaration
const name = "Adam Sandler";
//function default perameter
function add(a, b = 100) {
    return a + b;
}
console.log(add(5));//105 cause of b==100
//arrow function()=>
//single line one parameter
const doubleIt = (number) => (number * 2);//no retrun in single line function
const add2 = (a, b = 100) => (a + b);//more than onevariabel and single line
const result3 = () => 55;//no parameter
const doMath = (x, y) => {
    let sum = x + y;
    let diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doubleIt(50);
console.log(result);
const result2 = add2(50);
console.log(result2);
console.log(result3());
const result4 = doMath(500, 100);
console.log(result4);

//template function
const greeting = `Hello ${name}, welcome to the club`;
console.log(greeting);
console.log('\`');// `\`` === '`' // --> true
console.log('`');

console.log(`hello
kais
i loe you`);

//spread operators : it spread an array to different idividual numebrs ...
let array1 = [1, 2, 3, 4];
let array2 = [12, 22, 32, 42];
let array3 = [123, 223, 323, 423];
let allArray = [...array1, 32, ...array2, ...array3, 55, 46];
console.log(allArray);
console.log(Math.max(...allArray));//max of the array
let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);
console.log(d);

//merge objects
const user1 = {
    name: 'Jen',
    age: 22,
};
const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};
const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);

//function declaring
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

//CLASS START->class is look like a structure in c
class student {
    constructor(id, Name, cgpa) {
        this.id = id;
        this.name = Name;
        this.number = cgpa;
    }
}
const student1 = new student(62, 'Rini', 3.3);
const student2 = new student(63, 'Richi', 3.9);
console.log(student1.name, student2.name);
student1.place = "chaka";//add place in student1 
console.log(student1);
class car {
    constructor(Brand, Price) {
        this.Brand = Brand;
        this.Price = Price;
    }
}

console.log(new car('Audi', '$10000'));

//inheritance in js
//class name Capital letter
class Parent {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = "blyat";
    }
    greeting() {
        return (this.firstName + ' ' + this.lastName);
    }
    farewell() {
        console.log(`good bye! ${this.firstName} ${this.lastName}`);
    }
}
const parent1 = new Parent('Tom', "hanks");
console.log(`hi! he is,${parent1.greeting()}`);
parent1.farewell();
//call parent class via super
class baby extends Parent {
    constructor(firstname, lastname, nickname, babyname) {
        super(firstname, lastname, nickname);
        this.Babyname = babyname;
    } 

    
    get babyname() {
        return this.babyname;
    }
    set lastname(babuname){
        this.lastName = babuname;
    }

};
let baby1 = new baby("karim", "kais", "", "dice");
baby1.lastname="kasi";
console.log(baby1);
//destructuring
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
const friendAge={
    fahim: 20,
    rahim:30,
    kahim: 45,
    jahim:60
}
const { kahim,rahim,jahim,dahim }=friendAge;
console.log(kahim,jahim,dahim,rahim);//dahim is undefined
//serial maintain does not matters.
//array destructuring
const friendGf=['rahima','karima','garima','chandrima','karuma'];
const[a,b,...older]=friendGf;
console.log(a);//rahima
console.log(b);//karima
console.log(older);//[ 'garima', 'chandrima', 'karuma' ]
//swap values using this method
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
