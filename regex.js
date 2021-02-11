let myString = "hello world";
let regex = /hello/;//regex is writing in this way . the searched string is in between the /name/ ;
//remember regex.test(varialeName) is case sensitive . u can not match any upper case letter with lower case letter .like there is a option if regex is matched the answer is true unless the answer is false. 
console.log(regex.test(myString));//true
regex = /Hello/;
console.log(regex.test(myString));//false cuase Hello is not hello

// if you want to ignore case you have to Put FLAG(i) at the end of regex literals. by an instance
//i means ignoreCase!
regex = /Hello/i;
console.log(regex.test(myString));//true cause we put a Flag after the regex variable that means we ignore CASE SENSITIVITY;

//Match a Literal String with Different Possibilities:(using PIPE (|) or charecter); by an instance
let myFarm = 'dog cat cow elephant';
regex = /dog|goat|snake/;//dog is here
console.log(regex.test(myFarm));//true 

//start mathcing : (MATCH)
//Match has an other sequence : variableName.match(regex);
//match returns the first Match of the sequencee.
let myTeam = 'kais kais kasi kais kais KAIS KAIS KASI KAIS';
regex = /kais/;
console.log(myTeam.match(regex));//it tells the index of the first match.
//if you wanna know about the next match you have to Put g Flag there.
//by an instance:
regex = /kais/g;
console.log(myTeam.match(regex));//it always givs us the array of string or numbers.
//if you wanna put many flags in one you have to add them next of the regex like /ig;
regex = /kais/ig;
console.log(myTeam.match
    (regex));

//period (.)->wildcard charecter;

//it means you have to want a sentence which like this:
let myFun = "fun cudsfd sdfsfus funck fum cum &u["
regex = /.u./g;//any 3 letter string which middle word is u
console.log(myFun.match(regex))//[ 'fun', 'cud', 'fus', 'fun', 'fum', 'cum' '&u[']
regex = /fu./g;//any 3 letter string which first two  word is fu and third letter is anything.
console.log(myFun.match(regex))//[ 'fun', 'fus', 'fun', 'fum' ]

//Match letters of alphabet : [];
//vowels of a string ;
let myVowel = 'kasi is the other none father bun nothing learn something earn';
regex = /[aeiou]/ig;
console.log(myVowel.match(regex))//[
// 'a', 'i', 'i', 'e', 'o',
//     'e', 'o', 'e', 'a', 'e',
//     'u', 'o', 'i', 'e', 'a',
//     'o', 'e', 'i', 'e', 'a'
// ]
//another Example like this:
let myB = 'bag big buh fuck bug luck bun run sun ';
regex = /b[aiu]g/g;
console.log(myB.match(regex))//[ 'bag', 'big', 'bug' ]
//every letter in the string:[a-z] 
//just a,b,c,d means [a-d];
let myLetters = 'the roads are clumsy and full of calamity like me'
regex = /[a-z]/ig;
console.log(myLetters.match(regex));
regex = /[a-d]/ig;
console.log(myLetters.match(regex));//no b in the string .
//match all numbers:[0-9];
//match letters + numbers;
let Numbers = 'bieba hf fsfb 344 57584.43ere haffb'
regex = /[0-9h-s]/ig;
console.log(Numbers.match(regex));
regex = /[[3-6i-l]/ig;
console.log(Numbers.match(regex));

//negated character: To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
let Names = 'kasi jasika kais 1242332kasi Jasika';
regex = /[^kasi1-9]/ig;//it cuts all k,a,s,i ,1-9 letters from the string .
console.log(Names.match(regex));//[' ', 'j', ' ', ' ', ' ', 'J']

//Match Characters that Occur One or More Times:
//You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
let difficultThing = 'gggkasiffdfdffggsssfdfgf';
regex = /g+/ig;
console.log(difficultThing.match(regex));//['ggg', 'gg', 'g']

///* means that charecter has this letter 0 or more time;
let scoreCard = "goooooooooooooooooooooooal";
let fuck = "gut fiuck";
let suck = "ovet and ovet a"
regex = /go*/;
console.log(scoreCard.match(regex));//'gooooooooooooooooooooooo';
console.log(fuck.match(regex));//gut -> g
console.log(suck.match(regex));//ovet->null;don't start with g

//greedy match->big string returns
//default -> greedy match
//lazy match->smallest string returns
//?-> makes a greedy match to lazy match

//[^something] means starts with that
//[something$] means ends with that

// \w means any letter+charecters

//\w :The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);//31 charecters are [A-Za-z0-9_].



// \W means doesnot match any letter+numbrs
// You can search for the opposite of the \w with \W.Note, the opposite pattern uses a capital letter.This shortcut is the same as [^ A - Za - z0 -9_]
quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// \d means any digits
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\d/g; // Change this line
result = movieName.match(noNumRegex).length;
console.log(result);//2001 -> 4


// \D means ignores numbers and matches any non-numbers
//The shortcut to look for non - digit characters is \D.This is equal to the character class [^ 0 - 9], which looks for a single character that is not a number between zero and nine.
noNumRegex = /\D/g; // Change this line
result = movieName.match(noNumRegex).length;
console.log(result);//17

//{minimum numbers of the previous match,maximum numbers of the match}
//You can specify the lower and upper number of patterns with quantity specifiers.Quantity specifiers are used with curly brackets({ and }).You put two numbers between the curly brackets - for the lower and upper number of patterns.


// \s means whitespaces which is tabs,enter and shift
//You can search for whitespace using \s, which is a lowercase s.This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.You can think of it as similar to the character class [\r\t\f\n\v].
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
 result = sample.match(countWhiteSpace);


// \S means non-whitespace charecters
//Search for non - whitespace using \S, which is an uppercase s.This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.You can think of it being similar to the character class [^ \r\t\f\n\v].
//quantity specifiers: {MIN,MAX} it means the previous charecters have to minimum MIN values and maximum MAX values:it min 
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6} no/;//it means it starts with O and it must have {minimum 3 h and maximum 6 h} and space after that no at the end;
console.log(ohRegex.test(ohStr));//true cause O , h occures 3 times


//question: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
//answer: 
let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2,122}\d*$|^[a-zA-Z]\d\d+$/; // Change this line
result = userCheck.test(username);

console.log(result)

//optional symbol: letter?
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true;

//lookahead

//positive Lookahead
let sampleWord = "bana12";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/ // Change this line
result = pwRegex.test(sampleWord);
result=sampleWord.match(pwRegex);
console.log(result);

//grouping charecters: Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true

//Reuse Patterns Using Capture Groups:You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
let x = '42 42 42 42';
let reRegex = /^(\d+)\s\1\s\1$/;
if (reRegex.test(x) === true)
    console.log(x.match(reRegex));

//Use Capture Groups to Search and Replace:You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
result = str.replace(fixRegex, replaceText);
console.log(result);//three two one

//Remove Whitespace from Start and End:String.prototype.trim()

let hello = "   Hello, World!  ";
//let wsRegex = /(\s)\1$/; // Change this line
let fsRegex = /(^\s+)|(\s+)$/g; // Change this line
result = hello.replace(fsRegex, '');
 //result = hello.replace(wsRegex, ''); // Change this line
console.log(result);

//use console.clear() to cleat the console.
// console.clear();
