class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  detailOne() {
    console.log("username is " + this.username);
  }
}

const saurav = new User("saksena", "saksena@gmail.com", "abc@!23");
console.log(saurav);
saurav.detailOne();
console.log(saurav.password);
console.log(saurav instanceof User);

//behind the scene

function hello(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
hello.prototype.changeName = function () {
  return this.username.toUpperCase();
};

const amit = new hello("amit kumar", "amit@test.com", "abcabc");
console.log(amit);
console.log(amit.changeName());
