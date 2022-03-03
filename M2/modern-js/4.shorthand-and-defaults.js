/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */

const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

<<<<<<< HEAD
//Create an object with 3 key-value pairs: {first: 'Nicole', second: 'Aunapu', last: 'Mann'}

const fullName = {
  first,
  middle,
  last
}

// Object short-hand converts the variable assignment operator '=' into the key-value operator ':'

//console.log(fullName)

for (let name of Object.values(fullName)) { console.log(name) }
=======
// create an object with three key value pairs: { first: "Nicole", middle: "Aunapu", last: "Mann" }
const fullName = {
  first,
  middle,
  last,
};

// Object short-hand converts the variable assignment operator "=" into the key/val associator operator ":"
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */
//Benefits of short-hand: shorter code
//Drawbacks: The keys inside the new object must match the variables


// shorter!

// BUT

// you're stuck with the same names

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
<<<<<<< HEAD

function greet(name) {
  let result = "";
  if (name) {
    result = `Welcome to NASA, ${name}!`;
  } else {
    result = "Welcome to NASA, space cadet!";
  }
  return result;
}

//Create a new function using the concise arow function:

const greet = (name = 'space cadet') => `Welcome to NASA ${name}`

greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"
=======
const greet = (name = "space cadet") => `Welcome to NASA, ${name}!`;

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
<<<<<<< HEAD
// Removing the if/else statement
// Shorter codes
// BUT: BE CAREFUL about the default values that are arrays or objects
=======

// removing conditional logic from our function definitions
// BUT
// you have to be careful about default values that are arrays or objects
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
