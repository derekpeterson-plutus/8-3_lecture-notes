/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */

const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

//Create an object with 3 key-value pairs: {first: 'Nicole', second: 'Aunapu', last: 'Mann'}

const fullName = {
  first,
  middle,
  last
}

// Object short-hand converts the variable assignment operator '=' into the key-value operator ':'

//console.log(fullName)

for (let name of Object.values(fullName)) { console.log(name) }

/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */
//Benefits of short-hand: shorter code
//Drawbacks: The keys inside the new object must match the variables


/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */

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

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
// Removing the if/else statement
// Shorter codes
// BUT: BE CAREFUL about the default values that are arrays or objects
