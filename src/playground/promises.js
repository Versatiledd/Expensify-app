const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Mathew",
      age: 25
    });
  }, 1500);
});

console.log("before");

promise
  .then(data => {
    console.log(data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 1500);
    });
  })
  .then(str => {
    console.log("does it run ?", str);
  })
  .catch(error => {
    console.log("error: ", error);
  });

console.log("after");
