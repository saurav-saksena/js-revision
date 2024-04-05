function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}

let gte_func = foo();
console.log(gte_func());

function saurav() {
  var name = "saurav";
  function printName() {
    console.log(name);
  }
  var name = "kumar";
  return printName;
}
let myyy = saurav();
myyy();

function numberGenerator() {
  let num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}
var number = numberGenerator();
number();

function sayHello() {
  let say = function () {
    return console.log(hello);
  };
  let hello = "hello world!";
  return say;
}
let sayHelloClosure = sayHello();
sayHelloClosure();
