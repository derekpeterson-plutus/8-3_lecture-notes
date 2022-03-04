/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
function sumAllNumbers(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

console.log(sumAllNumbers([10, 20, 30])); //> 60
console.log(sumAllNumbers([10 - 10])); //> 0
console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states 
  should be separated by a comma and a space.

  If there are no states, just print "STATES: ".
*/
function presentAllStates(states) {
  let result = "STATES: ";
  for (let state of states) {
    result += `${state}, `;
  }
  return result;
}

console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
console.log(presentAllStates([]));
//> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determines whether or not any of the states provided include a space (i.e. " ") in their name.
*/
function hasSpace(states) {
  let result = false;
  for (let state of states) {
    if (state.includes(" ")) result = true;
  }
  return result;
}

console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
  IS VALID
  ---------------
  Write a function that returns false if any state abbreviation is longer than two characters.
*/
function isValid(states) {
  let result = true;
  for (let state of states) {
    if (state.length > 2) result = false 
  }
  return result;
}

console.log(isValid(["AK", "NYC", "FL"])); //> false
console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  KEBAB CASE
  ---------------
  Write a function that returns a new array of all the states in kebab casing.
*/
function kebabCase(states) {
  let kebabCaseArray = [];
  for (let state of states) {
    kebabCaseArray.push(state.toLowerCase().replace(" ", "-"));
  }
  return kebabCaseArray;
}

console.log(kebabCase(["Alaska", "New York", "Florida", "West virginia"]));
//> [ "alaska", "new-york", "florida", "west-virginia" ]
console.log(kebabCase([]));
//> []

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
*/
function find(states, name) {
  let result = null;
  for (let state of states) {
    if (state === name) result = state;
  }
  return result;
}

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

/*
  FILTER ABBREVIATIONS
  ---------------
  Write a function that filters out all strings equal to or longer than 3 characters. Return a new array with just the valid abbreviations.
*/
function filterAbbreviations(states) {
  let result = [];
  for (let state of states) {
    if (state.length === 2) result.push(state);
  }
  return result;
}

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []
