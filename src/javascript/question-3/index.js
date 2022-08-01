 export function listPrintersInTheStock(printers) {
  // check if the array contains something
  if (printers.length === 0) {
    return 'There is no printer in the stock.';
  }
  // check if there is only one string in the array
  else if (printers.length < 2) {
    return `You can find only one printer in the stock : ${ printers[0] }.`;
  }
  // if there are at least two strings in the array
  else {
    // .slice(0, 2) : get the two strings items in the array
    // .join(', ') : the two sliced strings are joined by a comma
    const twoFirstPrinters = printers.slice(0, 2).join(', ');
    const extraPrinter = printers.length - 2;
    return `You can find the following printers in the stock : ${ twoFirstPrinters } and ${ extraPrinter } more.`;
  }
};
