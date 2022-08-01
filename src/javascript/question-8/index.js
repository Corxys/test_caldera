// '.race()' return the first resolved promise, 'promiseNumberThree' in this case, in 600 milliseconds
// see : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

const promiseNumberOne = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 950);
});
const promiseNumberTwo = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(2), 1800);
});
const promiseNumberThree = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(3), 600);
});
const promiseNumberFour = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(4), 980);
});
Promise.race([promiseNumberThree, promiseNumberFour, promiseNumberOne, promiseNumberTwo]).then(function(promiseCode) {
  console.log(promiseCode);
});

// '.all()' return the result of the all promises contains in the argument
// see : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.all([promiseNumberThree, promiseNumberFour, promiseNumberOne, promiseNumberTwo]).then(function(promiseCode) {
  let sum = 0;
  // loop on the result of the promises
  promiseCode.forEach(item => sum += item);
  return sum;
  // sum = 10
});
