let numbers = [1, 2, 3];
numbers[1] = 10
console.log(numbers)
let masiv = [1, 2, 3];
let novyiRiadok = 4;
for (let i = 0; i < 1; i++) {
  masiv[masiv.length] = novyiRiadok; 
}
console.log(masiv);
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
let numbers1 = [12, 45, 3, 67, 89, 23, 5, 78, 34, 56];
let max = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > max) {
    max = numbers1[i];
  }
}
console.log(max);
let nums10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of nums10) {
    if (num % 2 === 0) {
        console.log(num);
    }
}