// 1
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

const totalOrder = orders.map(amt => amt.amount);
const add = (a, b) => a + b;
const sumTotal = totalOrder.reduce(add);
console.log(sumTotal);

// 2
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const num = a => a + 1;
const incrementNum = arrayOfNumbers.map(num);
console.log(incrementNum);

// 3

const array = [1, 2, 3, 11, 12, 13];
const toEvens = num => num % 2 == 0;
const finalArray = array.filter(toEvens);
console.log(finalArray);

// 4

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const searchWord = "ka";

const result = friends.filter(word => word.includes(searchWord));

console.log(result);

// 5

const array2 = [6, 7, 7];
const add2 = (a, b) => a + b;
const sumArray = array2.reduce(add2);
console.log(sumArray);

// 6

const givenArray = [2, 3, 4];
const sqrtNum = a => Math.pow(a, 2);
const sqrtArray = givenArray.map(sqrtNum);
console.log(sqrtArray);
