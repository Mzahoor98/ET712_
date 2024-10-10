/**
 * Muhammad Zahoor
 * Sep 17, Javascript Object
 * Sep 19, try and catch
 */

console.log("Muhammad Zahoor")
console.log("\n -------- Example 1: --------")
// create an object named 'car'
const car ={
    type: "Fiat",
    model: 500,
    color: "white",
}
console.log(`The model of the car is ${car.model}`)

console.log("\n -------- Example 2: use of 'this' keyword in an object --------")
//create an object named 'person'
const person = {
    //defining properties
    firstname: "John",
    lastname : "Doe",
    id : 1234,

    //defining methods
    fullname: function(){
        return `${this.firstname} ${this.lastname}`
    }
}

// accessing method 'fullname'
console.log(person.fullname())

console.log("\n -------- Example 3: object constructor using function --------")
function course(title, instructor, code, session, students){
    this.title = title,
    this.instructor = instructor,
    this.code = code,
    this.session = session,
    this.students = students
}
// set up values to the object
let course1 = new course("Javascript programming", "Wu", "ET712","H1", 12)

// accessing properties
console.log(`The course ${course1.title} has ${course1.students} Students`)

console.log("\n-------- Example 4: Methods --------")
const myMath = {
    // defining methods
    square : function(num){
        return num*num
    },
    double : function(num){
        return num*2
    }
}

// accessing methods
let n = 3
let number1 = myMath.double(n)
let number2 = myMath.square(n)

// print results
console.log(`The double of number ${n} is ${number1}`)
console.log(`The Square root of ${n} is ${number2}`)

/**
 * SEP 19, 2024
 * try-catch
 */
console.log("\n---- Example 1: try-catch ---- ")
// define a function to display a message in Upper-Case
function yell(message){
    console.log(message.toUpperCase().repeat(3))
}

try {
    // call the function
    yell("Good Morning")
    yell(123)
}
catch(e){
    console.log(`ERROR! ${e}`)
}
finally{
    console.log("end of calling function yell()")
}
// after example
console.log("\n -------- lines after example 1 -------- \n")

console.log("\n-------- Exercise 1: --------")
const mycalculator = {
    message: "This calculator can compute area of a square and volume of a cube",
    side: 2,

    area_square: function() {
        return this.side * this.side;
    },

    volume_cube: function() {
        return this.side * this.side * this.side;
    }
};

console.log(mycalculator.message);
console.log("Area of the square: " + mycalculator.area_square());
console.log("Volume of the cube: " + mycalculator.volume_cube());

console.log("\n---- Exercise 2: -----")
// Define a javascript function named 'divideNumbers' that takes two parameters, 'a' and 'b'.
// The function should attempt to divide 'a' and 'b' and return the result.
// If the division is undefined, return a message that says 'Error performing the division'.
// Use try-catch inside the function.

function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    } catch (error) {
      return "Error performing the division";
    }
  }
  console.log(divideNumbers(50, 2)); 
  console.log(divideNumbers(25, 0));
