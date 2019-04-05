# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between .forEach & .map.

// The biggest difference between .forEach and .map is that return is implicit with .foreach, but .map demands the developer write return in order to see the new array that has been stored. More on .foreach and .map below! 

// .forEach and .map are both array methods that help developers perform an action on a data set, BUT they have some key difference. .forEach will go through an array item by item and perform an action, for example, you could use .foreach to console log every item in an array one by one. One feature that developers need to look out for is that .forEach *must* iterate through every item without stopping. .map on the other hand creates a new array without manipulating the original array, for example, you could call .map to create a new array but with every string item in the array converted to all lower case. 

2. What is the difference between a function and a method?

// This is a trick question, because methods are functions! Nice try, Lambda School. THAT SAID, methods are specifically functions that are attached to objects, whereas functions themselves can exist outside an object. It's sort of like that saying, "Every square is a rectangle, but not every rectangle is a square." 

3. What is closure?

// Closure is the invisible glue that allows values to pass between Parent and Child objects in Javascript via references. It's a combination of a function, and the lexical environment within which that function was declared. 

4. Describe the four rules of the 'this' keyword.

// 1 - Window binding: 
    To start, is something we should never do! When in the global scope, the value of `this` will point to the window or console object. 
    In our use cases, this can be our entire browser. 
    
    // Window binding example 
    function forest(tree) {
        console.log(this); // Logs my window, a whole bunch of Javascript, to the console. 
        return tree;
        }
    
// 2 - Implicit binding: 
    Applies to objects! If we're using a method on an object, `this` is bound to whatever context is left of the dot. 
    
    // Implicit binding example 
    const forest = {
        greeting: 'Hello',
        sayTree: function(name) {
        console.log(`${this.greeting} I am an ${name} tree!`);
        console.log(this); // Logs my greeting and the function to the console, because we're using an object 
        and `this` points to the left of the dot. 
        }
    };

// 3 - New binding: 
    New binding uses constructor functions, which means that `this` refers to the specific instance of an object that is created and returned by the construction.
    
    // New binding example 
    function HappyTree(treeType) {
        this.greeting = 'Hello, welcome to the forest, I am a ';
        this.treeType = treeType;
        this.welcome = function() {
            console.log(this.greeting + this.treeType);
            console.log(this); // Points to my HappyTree Object instance that HappyTree creates (oak for oak; willow for willow)
        };
    }  
   
// 4 - Explicit binding: 
    Applies to functions! A few specific methods, .apply, .bind, and .call tell `this` to 
    look in so specific a place for context it can even override previous context.  
    function HappyTree(treeType) {
        this.greeting = 'Hello, welcome to the forest, I am a ';
        this.treeType = treeType;
        this.welcome = function() {
            console.log(this.greeting + this.treeType);
            console.log(this); // Points to my HappyTree Object instance that HappyTree creates (oak for oak; willow for willow)
        };
    }
    const oak = new HappyTree('oak');
    const willow = new HappyTree('willow');
    // Using .call to overwwrite the previous values, like in a spooky forest 
    console.log(oak.welcome.call(willow)); 
    console.log(willow.welcome.call(oak)); 
*

5. Why do we need super() in an extended class?

// We use super() in extended classes so we can use the same attributes and methods of the extended Class. 

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
