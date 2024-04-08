class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password;
  }
  set password(val) {
    this._password = "**" + val + "**";
  }
}

const rakesh = new User("raka@ranga.com", "ranga01");
console.log(rakesh.password);

console.log(rakesh.email);
