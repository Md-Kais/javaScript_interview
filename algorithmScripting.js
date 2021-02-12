//reverse a string :
function reverseString(str) {

    return str.split("").reverse().join('');
}

console.log(reverseString("hello"));

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {//console.log(str)
    str = str.split(' ');
    let kr = '';
    //console.log(str)
    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]).
        str[i] = str[i].toLowerCase();
        const capitalizeFirstLetter = ([first, ...rest]) =>
            first ? first.toUpperCase() + rest.join('') : '';
        str[i] = capitalizeFirstLetter(str[i]);
        //console.log(str[i]);
        if (i <= str.length - 2) {
            kr += str[i] + ' ';
        }
        else {
            kr += str[i];
        }

    }
    return kr;
}

console.log(titleCase("sHoRt AnD sToUt"));
//sorting array in js
//ascending :  arr.sort((function(a, b){return a - b}));
//descending :  arr.sort((function(a, b){return b-a}));
// question: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
//answer:
function getIndexToIns(arr, num) {
    arr.sort((function (a, b) { return a - b }));console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
//string match:
//quesstion:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
//answer:
function mutation(arr) {
    //return arr;
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();

    str1 = str1.split('');
    str2 = str2.split('');

    for (let i = 0; i < str2.length; i++) {
        let ans = true;
        for (let j = 0; j < str1.length; j++) {
            if (str2[i] != str1[j]) {
                ans = false;
            }
            else {
                ans = true;
                break;
            }
        }
        if (ans == false) {
            return false;
            break;
        }
    }
    return true;
    console.log(str1, str2);
}

console.log(mutation(["Alien", "line"]))

///chunky monkey

//question :https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
//ans:
function chunkArrayInGroups(arr, size) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let subAns = [];
        for (let j = 0; j < Math.min(size, arr.length - i); j++) {
            subAns.push(arr[i + j]);

        }
        i += size - 1;
        ans.push(subAns);
    }
    return ans;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
