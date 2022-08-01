// the key 'this.brand' of the object 'printer' is undefined, because the scope of the '.forEach' method is local
// voir : https://www.pierre-giraud.com/javascript-apprendre-coder-cours/portee-variable-return-fonction/

let printer = {
  brand: "Epson",
  inks: ["cyan", "magenta", "yellow", "black"],
  fulfillInks() {
    // however, call 'this.brand' in the 'fulfillInks' method is possible, because the scope is global
    // console.log(this.brand);
    this.inks.forEach(function(ink) {
      console.log(`${this.brand} printer : ${ink} ink fulfilled.`);
    });
  }
};
printer.fulfillInks();

// TECHNIQUE N°1
let printer = {
  brand: "Epson",
  inks: ["cyan", "magenta", "yellow", "black"],
  fulfillInks(brand) {
    this.inks.forEach(function(ink) {
      console.log(`${brand} printer : ${ink} ink fulfilled.`);
    });
  }
};
printer.fulfillInks(printer.brand);

// TECHNIQUE N°2
let printer = {
  brand: "Epson",
  inks: ["cyan", "magenta", "yellow", "black"],
  fulfillInks() {
    this.inks.forEach(function(ink) {
      console.log(`${printer.brand} printer : ${ink} ink fulfilled.`);
    });
  }
};
printer.fulfillInks();


