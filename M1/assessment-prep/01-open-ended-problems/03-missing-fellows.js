// Setup: oH NOooOoO My cAPs-loCk KeY IS jaMMEd Up!
// When I entered all of the 8.3 fellows in our salesforce database into a google sheet,
// all of the names got mixed up with capital letters! On top of that
// I might have accidentally deleted some of them :(

// Challenge: Write a program that prints out the names of any 8.3 fellows that are in the salesforce database but missing from the google sheet.

// Hints:
//   -> Try to break up this problem into smaller checkpoints.
//   -> Run your code frequently. Before you use node to run your code, predict what you will see in the terminal. If your predictions are off, figure out why!

const salesforceData = [
  "Abdullah Tasfiek",
  "Antonio Shivers",
  "Augusto Rupay",
  "Bethany Torres",
  "Candace Garvin",
  "Derek Peterson",
  "Edwin Codrington",
  "Emalee Soto",
  "Hermanclyde Guerrero",
  "Isaac Gonzalez",
  "Jan-Carlos Matias",
  "Jonathan Scheiber",
  "Josie Pascasio",
  "Juan Sebastian Bowers",
  "JuHao Chen",
  "Jyoti Singh",
  "Karyn huston",
  "Kedari Matthews",
  "Krystal Mansour",
  "Krystelle Gaston",
  "Lawrence Chen",
  "Lily Wu",
  "Luis Ortiz",
  "Matthew Munroe",
  "Meera Ramesh",
  "Michelle Ortega",
  "Nikesh Wankhade",
  "Oscar Varon",
  "Pratima Roy",
  "Rebecca Garcia",
  "Shamar Reeves",
  "Shaquala Fredericks",
  "Stephanie Frias",
  "Taryne Leach Gonzalez",
  "Trevor Triumph",
];

//console.log(salesforceData.length);

let googleSheetsData = [
  "JuhaO cheN",
  "krYSTal MANsOUR",
  "jYotI SiNGH",
  "isaac gONZAleZ",
  "PraTimA roy",
  "LIly Wu",
  "Jan-CarLOS maTiAS",
  "NiKeSH WankhAde",
  "SHAMAR reEvES",
  "oscar VARon",
  "rebEcCA gArcIa",
  "SHAqUALA freDerIcks",
  "JonAthAn SCHEIBEr",
  "TARyNe LEaCH GONZalez",
  "miChelLE ORtega",
  "jOsiE PAscASIo",
  "cAndace gArVIn",
  "KEdaRi mATtHEwS",
  "augUsTo RUPAy",
  "JuAn sebASTIan BOwErs",
  "EDwiN CODRiNgTOn",
  "mEeRA RAmeSH",
  "BEtHANY toRreS",
  "MaTtHEW MunROE",
  "KRYSTeLLE GAston",
  "HErmANCLYde GuErrErO",
  "karyn HustOn",
  "lawRENce cHEN",
  "deREk pETeRSOn",
  "ANToNIO shIVeRs",
];

//console.log(googleSheetsData.length);

let arr1 = salesforceData;
let arr2 = googleSheetsData;

function printMissingNames(arr1, arr2) {
  let missingFellows = [];
  let list1 = [];
  let list2 = [];
  for (let elm of arr1) {
    list1.push(elm.toLowerCase());
  }
  for (let elm of arr2) {
    list2.push(elm.toLowerCase());
  }
  for (const elm of list1) {
    if (!list2.includes(elm)) {
      missingFellows.push(elm);
    }
  }
  return missingFellows;
}
console.log(printMissingNames(arr1, arr2));
