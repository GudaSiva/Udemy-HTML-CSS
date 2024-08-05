/*
let userName = "Siva";

console.log(40 + 20);

console.log("Ram");

console.log(userName);

console.log(userName);
console.log(userName);
console.log(userName);

let years = "234";
let PI = 3.14;
console.log(PI);
*/
// -------------------------------
// primitive DataTypes
// ------------------------------

// true;

// console.log(true);
// console.log("true");

// const findBoolean = true;
// console.log(typeof findBoolean);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 100;
// console.log(/year/, year);

// console.log(typeof null);

// let age = 20;
// age = 22;
// console.log(/age/, age);

// const currentAge = 20;
// // currentAge = 22;

// var currentAgeVar = 20;
// currentAgeVar = 43;

// ----------------------------------------
// Operations

// ------------------------------------

// let sivaAge = 2024 - 2000;

// console.log(/age/, sivaAge);
// console.log(typeof sivaAge);

// const additionNumbers = 10 + 20;
// console.log(/number/, additionNumbers);

// console.log(sivaAge / 2, sivaAge ** 2, sivaAge * 2);

// sivaAge += 2;
// sivaAge *= 2;
// sivaAge++;
// sivaAge--;
// console.log(/sivaAge/, sivaAge);

// ----------------------------------------
// Precedence

// ----------------------------------------

// let x,
//   y = 10;
// console.log(x, y);

// const massMark = 78;
// const heightMark = 1.69;
// const massJonn = 92;
// const heightJonn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJonn = massJonn / (heightJonn * heightJonn);
// const markHigherBMI = BMIMark > BMIJonn;
// console.log(/BMIMar/, BMIMark);
// console.log(/BMIMar/, BMIJonn);
// console.log(markHigherBMI);

// ----------------------------------------
// Template Literals
// ----------------------------------------

// const firstName = "Siva";
// const lastName = "Reddy";

// const Template = `My Full Name is
// ${firstName} ${lastName}`;
// console.log(Template);

// const myAge = (lastYearAge, presentYearAge) => {
//   const result = lastYearAge + presentYearAge;
//   console.log(result);
//   return result;
// };

// myAge(20, 30);

const age = 18;

const isYourEligible = age >= 18;

if (isYourEligible) {
  console.log("Your are eligible for vote");
} else console.log("Your are not eligible for vote");
