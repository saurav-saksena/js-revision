class user {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  userdetails() {
    console.log(this.username + this.password + this.email);
  }
}

const teacher = new user("suresh", "sureshbhura1", "suresh@bhura.com");
console.log(teacher.email);
teacher.userdetails();

class doctor extends user {
  constructor(username, password, email, degree, exp) {
    super(username, password, email);
    this.degree = degree;
    this.exp = exp;
  }
  somedetails() {
    console.log(
      `${this.username} has ${this.degree} degree and ${this.exp} experience`
    );
  }
}

const mohit = new doctor(
  "mohit",
  "mohitbhai",
  "mohit@dalla.com",
  "mbbs",
  "3 years"
);
console.log(mohit);
mohit.somedetails();
mohit.userdetails();
