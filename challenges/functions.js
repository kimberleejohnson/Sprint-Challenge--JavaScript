// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback*/

// Create a higher-order function named consume that can take 3 parameters.
// The first two parameters can accept any argument
// The last parameter accepts a callback 
function consume(param1, param2, callback){
  // In the body of the function return the callback with the two parameters that you created. 
  return callback(param1, param2); 
}

/* Step 2: Create several functions to callback with consume();*/

// Create a function named add that returns the sum of two numbers
let add = function(param1, param2) {
  return param1 + param2; 
} 

// Create a function named multiply that returns the product of two numbers 
let multiply = function(param1, param2) {
  return param1*param2; 
} 

// Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"

let greeting = function(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`; 
} 


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// I also added a console.log so I'd see them in the conosle. 
 console.log(consume(2,2,add)); // 4
 console.log(consume(10,16,multiply)); // 160
 console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The lexical scope of the variable internal is within the Parent function myFunction. So, thanks to closures, it's saved for whatever nested values that follow might need it later. Nestedfunction() is declared at the same scope that internal is instantiated (within function), and since the reference to internal is inside its own function scope, it can look outside and above to myFunction() for context (but not outward!). 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();