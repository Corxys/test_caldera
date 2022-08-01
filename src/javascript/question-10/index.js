// 'await' can't work if it doesn't in an 'async' function

const foo = async () => {
  let response = await fetch('/user/1234');
  let user = await response.json();
}
