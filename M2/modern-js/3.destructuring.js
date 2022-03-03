/**
 * 1. What is destructuring? Write a brief response below.
 * Pulling out or unpacking individual parts of an object or array 
 */

// unpacking individual parts of an object or array
// kind of the inverse of object shorthand

/**
 * 2. Use destructuring to create three new variables from the following array.
 */

const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [astro1, astro2, astro3] = astronauts;

console.log(typeof astro2);

// You can tell we are using destructuring when there is a [] or a {} on the lhs of an =

const [first, second, third, fourth] = astronauts //=> If the [] or {} on the left hand side of the equal '=' sign, it is destructuring method

//console.log(first) //===> Print out 'Jessica Watkins'
//console.log(fourth) //===> Print out undefined

/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

// const {name, isActive, occupation} = astronaut

// console.log(name, isActive, occupation)


// const getName = () => ['Myra', 'Smith']
// const [firstName, lastName] = getName()

const { occupation } = astronaut;
console.log(occupation);

const getName = () => ["myra", "smith"];
const [firstName, lastName] = getName();


/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 * Shorter, less lines, easy to read
 */

/**
 * 5. Apply destructuring to the following function.
 */

function getAstronautActivityStatus({isActive, name}) {

function getAstronautActivityStatus({ isActive, name }) {

  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
    result = `${name} is not active.`;
  }
  return result;
}
}
// const astronaut = {
//   name: "Jessica Watkins",
//   isActive: true,
//   occupation: "Geologist",
// };


console.log(getAstronautActivityStatus(astronaut)); //> "Jessica Watkins is active."

getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."
