// function greet(name) {
//   return `hi ${name}`;
// }

const greet = (name) => {
  return `hi ${name} welcome to the class !`;
};

function greet_name(greetFn, msg, name) {
  console.log(`${greetFn(name)} ${msg}`);
}
greet_name(greet, "Be ready to learn javaScript", "Henary");

// example 2 :
function multiplier(num) {
  return function (x) {
    return x * num;
  };
}
const double = multiplier(5);
const triple = multiplier(3);
console.log(double(10));
console.log(triple(10));

//task create an array that contains their age;

//without higherOrder function
const birthYear = [1998, 1985, 1997, 1999, 2010];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  let age = 2024 - birthYear[i];
  ages.push(age);
}

let newAge = [];
console.log(ages);
for (const item of birthYear) {
  let age = 2024 - item;
  newAge.push(age);
}
console.log(newAge);

//with higherOrderFunction map
const mapAge = birthYear.map((item) => 2024 - item);
console.log(mapAge);

//task : create array for given array that contains age only greater than equals to 18
const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 },
];

let fullage = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
    fullage.push(persons[i]);
  }
}
console.log(fullage);

let underAge = [];
for (const item of persons) {
  if (item.age < 18) {
    underAge.push(item);
  }
}
console.log(underAge);
// with higherOrderFunction filter

const filterFullAge = persons.filter((item) => item.age >= 18);
console.log(filterFullAge);
//task: sum of given array
const sumArray = [2, 5, 7, 10, 6];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
  sum = sum + sumArray[i];
}
console.log(sum);

// with higherOrderFunction reduce

const reduceSum = sumArray.reduce((result, current) => {
  return result + current;
}, 4);
console.log(reduceSum);
//another ex

const api = [
  { item: "pen", qty: 10, price: 10 },
  { item: "book", qty: 5, price: 100 },
  { item: "cokkie", qty: 1, price: 50 },
];
let forEachsum = 0;
api.forEach((val) => {
  forEachsum += val.price * val.qty;
});
console.log("forEachsum : " + forEachsum);
let sumapi = 0;
for (const val of api) {
  sumapi = sumapi + val.price;
}
console.log(sumapi);

const reduceapi = api.reduce((result, current) => {
  return result + current.price;
}, 0);
console.log(reduceapi);
//total Price 10*10+5*100+1*50=100+500+50=650

let totalPrice = 0;
for (const item of api) {
  totalPrice = totalPrice + item.qty * item.price;
}
console.log("total price of given api items is : " + totalPrice);

const totalReduceprice = api.reduce((result, current) => {
  return result + current.qty * current.price;
}, 0);
console.log(`total price by reduce method : ${totalReduceprice}`);

let str = "saurav";
for (const item of str) {
  console.log(item);
}
let obj = { name: "saurav", age: 25, status: "single" };
for (const key in obj) {
  console.log(`${key} : ${obj[key]}`);
}

const somedata = [
  { name: "saurav", pro: "developer", password: "djkl" },
  { name: "rahul", pro: "teacher", password: "vkjlaj" },
  { name: "john", pro: "actor", password: "389sjkfkj" },
  { name: "shiva", pro: "doctor", password: "jlkfsd" },
];
const abstractdata = somedata.map((item) => {
  return { ...item, password: "******" };
});
console.log(abstractdata);

const abstract2 = somedata.map((item) => {
  let { name, pro } = item;
  return { name, pro };
});
console.log(abstract2);

const abstract3 = somedata.map(({ pro, password }) => ({ pro, password }));
console.log(abstract3);
