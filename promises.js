// https://scotch.io/tutorials/javascript-promises-for-dummies
// https://www.youtube.com/watch?v=y8xPMYwQ0U8&list=PL1QRvYV-LXn7rxPGGSQYBe2JFktJi0P-v&index=11
// https://www.youtube.com/channel/UCpqYfSWEcyBGorRGvPsHkgg

function logInOrder(urls) {
  // fetch all the URLs
  const textPromises = urls.map(url => {
    return fetch(url).then(response => response.text());
  });

  // log them in order
  textPromises.reduce((chain, textPromise) => {
    return chain.then(() => textPromise).then(text => console.log(text));
  }, Promise.resolve());
}
