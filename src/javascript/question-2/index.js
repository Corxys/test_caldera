// rewritten
const arr = [1, 2, 4, 9];
const squared = arr.map(num => Math.pow(num, 2));

// tested
export function squaredNumbers(arr) {
  return arr.map(num => Math.pow(num, 2));
}
