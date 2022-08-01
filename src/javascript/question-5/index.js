// the result of the function 'usePrinter' will be 'I'm the printer ColorWorks C7500G',
// because it recovers the given variable to the function 'usePrinter' if no new printer name is assigned

function usePrinter() {
  let name = "ColorWorks C7500G";
  return [
    () => `I'm the printer ${name}`,
    (newName) => name = newName
  ]
}

const [declarePrinter, setPrinterName] = usePrinter();

// 'setPrinterName' allows you to update the state of 'name'
// works the same way as the hook state of React
// see : https://fr.reactjs.org/docs/hooks-state.html
let name = "SurePress L-6034";
setPrinterName(name);

console.log(declarePrinter());
