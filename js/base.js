let numbers = [1, 2, 3];
numbers[1] = 10
console.log(numbers)
let num = [5, 10, 27]
num[3] = 47;
console.log(num);
let nums = [5, 10, 15];
let sum = nums[0] + nums[1] + nums[2];
console.log(sum); 
let fiveNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}
let texts = ["short", "example", "hy", "JavaScript", "code"];
for (let word of texts) {
    if (word.length > 5) {
        console.log(word);
    }
}
let values = [3, 7, 22, 5, 1, 13, 9, 34, 0, 6];
let max = Math.max(3, 7, 22, 5, 1, 13, 9, 34, 0, 6);
console.log(max); 
let nums10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of nums10) {
    if (num % 2 === 0) {
        console.log(num);
    }
}