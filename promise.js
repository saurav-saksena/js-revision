const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let Error = false;
    if (!Error) {
      resolve({ username: "saurav saksena", _id: 48576 });
    } else {
      reject("Error: something went wrong !");
    }
  }, 1000);
});

promiseFive
  .then((user) => {
    let user1 = { ...user };
    user1.body = "good";
    return user1;
  })
  .then((user) => console.log(user))
  .catch((err) => console.log(err))
  .finally(() => console.log("promisefive completed with .then and .catch"));

async function consumePromisefive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error + " async await");
  }
}
consumePromisefive();

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E : ", error);
//   }
// }
// fetchData();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
