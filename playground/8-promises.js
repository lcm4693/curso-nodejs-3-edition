const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //It's safer because when we call resolve or reject functions, the promise is done.
    //The code below will call only resolve function.
    resolve([1, 4, 7]);
    reject("This is my error");
  }, 2000);
});

//When the method resolve is invoked in the Promise, our function then is called and the method reject calls catch function.
doWorkPromise
  .then(result => {
    console.log("Success!", result);
  })
  .catch(error => {
    console.log("Error !", error);
  });
