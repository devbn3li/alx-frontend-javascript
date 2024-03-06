function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with a setTimeout
    setTimeout(() => {
      resolve("Response from API");
    }, 1000);
  });
}

export default getResponseFromAPI;
