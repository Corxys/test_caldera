import { listPrintersInTheStock } from './index';

test('01. List printers in the stock', () => {
  expect(listPrintersInTheStock([])).toStrictEqual('There is no printer in the stock.');
});

test('02. List printers in the stock', () => {
  expect(listPrintersInTheStock(['ColorWorks C7500G'])).toStrictEqual('You can find only one printer in the stock : ColorWorks C7500G.');
});

test('03. List printers in the stock', () => {
  expect(listPrintersInTheStock(["ColorWorks C7500G", "SurePress L-6034"])).toStrictEqual('You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 0 more.');
});

test('04. List printers in the stock', () => {
  expect(listPrintersInTheStock(["SurePress L-6034", "SWJ-320", "SIJ-320UV"])).toStrictEqual('You can find the following printers in the stock : SurePress L-6034, SWJ-320 and 1 more.');
});

test('05. List printers in the stock', () => {
  expect(listPrintersInTheStock(["ColorWorks C7500G", "SurePress L-6034", "SWJ-320", "SIJ-320UV", "HP STITCH S500", "HP Latex R2000"])).toStrictEqual('You can find the following printers in the stock : ColorWorks C7500G, SurePress L-6034 and 4 more.');
});
