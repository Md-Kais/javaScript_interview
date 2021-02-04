//break
const nums =[1,2,3,4,5,6,7,8];
for(let i=0; i<nums.length; i++){
    if(nums[i]>4){
        break;
    }
    console.log(nums[i]);
}

//continue
const numbers = [2,5,6,8,9,2,3,4];
for(let j=0; j<numbers.length; j++){
    if(numbers[j]%2 != 0){
        continue;
    }
    console.log(numbers[j]);
}