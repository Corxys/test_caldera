# JavaScript

## Question n°1
Rewrite the following function using an arrow function.

```js
const printCopies = function (qty) {
  return '📄'.repeat(qty);
}
```

## Question n°2
The following piece of code is used to get an array of squared values. Could you write it in another way?

```js
const arr = [1, 2, 4, 9]
const squared = [];
for(const x of arr) {
  squared.push(x * x);
}
```

## Question n°3
Build a function that list the first two printers that are in stock, and the
total of other printers. You can find below some examples to help you build this
function.

```js
listPrintersInTheStock("ColorWorks C7500G", "SurePress L-6034");
//Result : You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 0 more.
listPrintersInTheStock("SurePress L-6034", "SWJ-320", "SIJ-320UV");
//Result : You can find the following printers in the stock : SurePress L-6034, SWJ-320 and 1 more.
listPrintersInTheStock("ColorWorks C7500G", "SurePress L-6034", "SWJ-320", "SIJ-320UV", "HP STITCH S500", "HP Latex R2000");
//Result : You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 4 more.
```

## Question n°4
Explain why `this.brand` value is undefined. Change the code using
two techniques to make `this.brand` reachable in the foreach loop.

```js
let printer = {
  brand: "Epson",
  inks: ["cyan", "magenta", "yellow", "black"],
  fulfillInks() {
    this.inks.forEach(function(ink) {
      console.log(`${this.brand} printer : ${ink} ink fulfilled.`);
    });
  }
};
printer.fulfillInks();
```

## Question n°5 & n°6
What will be the result of the `console.log()` instruction in the following code ? Why ? 

How can you change the value of `name` declared in `usePrinter()` (line 2) outside its declaration ?

```js
function usePrinter() {
  let name = "ColorWorks C7500G";
  return [
    () => `I'm the printer ${name}`,
    (newName) => name = newName
  ]
}
const [declarePrinter, setPrinterName] = usePrinter();
let name = "SurePress L-6034";
console.log(declarePrinter());
```

## Question n°7
In which order the following instructions will come out?

```js
console.log("Printer");
setTimeout(() => console.log("Ink"), 0);
Promise.resolve().then(() => console.log("Media"));
console.log("Jobs");
```

## Question n°8 & n°9
What will be the value of `promiseCode` ? After how long will it be displayed?

Transform the code above to calculate the sum of `promiseCode` values (write it down here). What’s the sum?

```js
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
```

## Question n°10
Is this piece of code working? If it doesn’t work, why? How could you make it work?
```js
let response = await fetch('/user/1234');
let user = await response.json();
```

## Question n°11
The following piece of code is using `then()` and `catch()` to chain promises. Rewrite `printJobs()` by using `async` 
and `await`.

```js
const printOneJob = () => new Promise( (resolve, reject) => {
  setTimeout(() => {
    return resolve("This job has been printed.", 200);
  })
});
const printAnotherJob = () => new Promise( (resolve, reject) => {
  setTimeout(() => {
    return reject("Another job hasn't been printed : there is no paper in the printer anymore.", 450);
  })
});
const printJobs = () => {
  printOneJob().then((result) => {
    return printAnotherJob();
  }).then((result) => {
    return result;
  }).catch((error) => {
    console.warn(error);
  });
}
printJobs();
```




