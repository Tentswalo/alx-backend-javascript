function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}

// Example usage:
const successfulPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Success!'), 1000);
});

const failingPromise = new Promise((_, reject) => {
  setTimeout(() => reject('Failure!'), 1000);
});

handleResponseFromAPI(successfulPromise)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

handleResponseFromAPI(failingPromise)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
