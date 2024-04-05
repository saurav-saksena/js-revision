// create promise

const promiseOne = new Promise((resolve, reject) => {
  const mathVal = Math.random();
  if (mathVal >= 0.5) {
    resolve("promise resolved " + mathVal);
  } else {
    reject("promise rejected " + mathVal);
  }
});
// function handleResolve(value) {
//   console.log(value);
// }
// function handleReject(value) {
//   console.log(value);
// }

// promiseOne.then(handleResolve, handleReject);

promiseOne
  .then((value) => `${value} saurav saksena`)
  .then((value) => console.log(value))
  .catch((vaue) => console.log(vaue));

// Create a Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    // Resolve the promise with a value (success case)
    resolve("This is the eventual value the promise will return");
    // Or reject the promise with an error (error case)
    // reject('An error occurred');
  }, 300); // Wait for 300 milliseconds
});

// Consuming the Promise
myPromise.then(
  (value) => {
    // Code to execute when the promise is resolved (successful)
    console.log("Resolved:", value);
  },
  (error) => {
    // Code to execute when the promise is rejected (error occurred)
    console.error("Rejected:", error);
  }
);
function fetchData() {
  fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => console.table(data.results[0].name))
    .catch((err) => console.log(err))
    .finally(() => console.warn("fetching data completed"));
}

fetchData();
