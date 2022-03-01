/**
 * 1
 * Write a function to return the keys of a  object.
 *
 * example output: name,sclass,rollno
 */
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function getKeys(obj) {
  console.log(Object.keys(student));
  console.log(Object.keys(student).length);
}
//getKeys(student)

/**
 * 2
 * Write a function to delete the rollno property from the following object.
 * Print the object before AND after deleting the property.
 */

function deleteRollno(obj) {
  // console.log(obj)
  // obj.rollno = undefined;
  // delete obj.rollno;
  // console.log(obj)
}
//deleteRollno(student)

/**
 * 3
 *
 * Write a function to get the length of a  object.
 */

function objLength(obj) {
  // let size = Object.keys(obj).length;
  // console.log(size)

  let counter = 0;
  for (let i in obj) {
    counter++;
    //console.log(i + ',')
  }
  return counter;
}
//console.log(objLength(student))

/**
 * 4
 *
 * Write a  function to print the data or each book on a single line (i.e. display book name, author name and reading status) of the following books.
 */

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function printLibrary(arr) {
  for (let x of arr) {
    console.log(`${x.title}, ${x.author}, ${x.readingStatus}`);
  }
}
//printLibrary(library);

/**
 * 5
 *
 * Write a function given the radius of a circle
 * to calculate and return the area and perimeter of a circle.
 *
 */

function areaAndParimeter(radius) {
  let area = 0;
  let parimeter = 0;
  area = Math.PI * radius ** 2;
  parimeter = 2 * Math.PI * radius;

  return `Area: ${area} \nParimeter: ${parimeter}`;
}
//console.log(areaAndParimeter(5))

/**
 * 6
 * 
 * Write a  function to return a sorted array of objects by the libraryID
 * 
 * example output:
    [
      {
        author: "Bill Gates",
        libraryID: 1254,
        title: "The Road Ahead"
      },
      {
        author: "Suzanne Collins",
        libraryID: 3245,
        title: "Mockingjay: The Final Book of The Hunger Games"
      },
      {
        author: "Walter Isaacson",
        libraryID: 4264,
        title: "Steve Jobs"
      },
    ]
*/

let arr = [
  {
    author: "Bill Gates",
    libraryID: 1254,
    title: "The Road Ahead",
  },
  {
    author: "Suzanne Collins",
    libraryID: 3245,
    title: "Mockingjay: The Final Book of The Hunger Games",
  },
  {
    author: "Walter Isaacson",
    libraryID: 4264,
    title: "Steve Jobs",
  },
];

function sortLibraryId(arr) {
  //console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].libraryID > arr[j].libraryID) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
//sortLibraryId(arr)

/**
 * 7
 *
 * Write a  function to convert an object into a list of `[key, value]` pairs.
 */

const book = {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead",
};

let result = Object.entries(book);
//console.log(result)

/**
 * 8
 * 
 * Write a  function to get a copy of the object
 * where the keys have become the values and the values the keys.
 * 
 * example output:
  {
    bill_gates: "author",
    1254: "libraryID",
    the_road_ahead: "title"
  };
 */

function inverseKeyToValue(book) {
  let obj = {};
  for (let key in book) {
    obj[book[key]] = key;
  }
  return obj;
}
console.log(inverseKeyToValue(book));

/**
 * 9
 *
 * Write a  function to check whether an object contains given property.
 *
 */

function objectHasProperty(book, prop) {
  if (prop in book) { console.log(`${prop}: ${book.libraryId}`) }
}
objectHasProperty(book, 'libraryId')