/*JAVASCRIPT */

/* -JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.
It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS */

/* Variables */

/* -Variables are containers for storing data (storing data values).

A variable is a quantity that may be changed according to the mathematical problem.

- In JavaScript, a variable can be declared using var, let, const keywords.
- var keyword is used to declare variables since JavaScript was created. It is confusing and error-prone when using variables declared using var.
- let keyword removes the confusion and error of var. It is the new and recommended way of declaring variables in JavaScript.
- const keyword is used to declare a constant variable that cannot be changed once assigned a value.
 */

/* JavaScript Data Types */

/*-JavaScript includes data types similar to other programming languages like Java or C#.
 JavaScript is dynamic and loosely typed language. It means you don't require to specify a type of a variable. */

/*Example */

let myvariable = 1; // numeric value

myvariable = 'one'; // string value

myvariable = 1.1; // decimal value

myvariable = true; // Boolean value

myvariable = null; // null value

/*

Conditional Statement

In JavaScript we have the following conditional statements:

-Use if to specify a block of code to be executed, if a specified condition is true
-Use else to specify a block of code to be executed, if the same condition is false
-Use else if to specify a new condition to test, if the first condition is false
-Use switch to specify many alternative blocks of code to be executed

*/

/*if condition
Use if conditional statement if you want to execute something based on some condition.*/

//Example: if condition

if (1 > 0) {
    alert("1 is greater than 0");
}
if (1 < 0) {
    alert("1 is less than 0");
}

//if...else

/*-The if...else statement executes a statement if a specified condition is truthy.
 If the condition is falsy, another statement in the optional else clause will be executed.*/

//Example
function testNum(a) {
    let result;
    if (a > 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));
// expected output: "NOT positive"


//The else Statement.

/*-Use the else statement to specify a block of code to be executed if the condition is false.*/

//Example-
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//JavaScript Loop
/*Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met.*/

//Example
for (initialExpression; condition; updateExpression) {
    // for loop body
}

//Example 1: Display a Text Five Times
const n = 5;

for (let i = 1; i <= n; i++) {
    console.log(`I love CS.`);
}

//The For Loop
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

//The For In Loop

for (key in object) {}

//The while Loop

/*The most basic loop in JavaScript is the while loop which would be discussed in this chapter. 
The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. 
Once the expression becomes false, the loop terminates.*/

//Example

while (i < 10) {
    text += "The number is " + i;
    i++;
}

//The do...while Loop

/*The do...while loop is similar to the while loop except that the condition check happens at the end of the loop.
 This means that the loop will always be executed at least once, even if the condition is false.*/

//Example
let text = "";
let i = 0;
do {
    text += i + "<br>";
    i++;
}
while (i < 5);




//JAVASCRIPT METHOD



//-A JavaScript function is a block of code designed to perform a particular task.
//-A JavaScript function is executed when "something" invokes it (calls it).


Example
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


// Document Object Model (DOM)


//-The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

/*-The DOM represents an HTML document as a tree of nodes. 
The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.*/

/*-Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents */
/*The DOM represents an HTML document as a hierarchy of nodes. Consider the following HTML document: */


//HTML Events

//An HTML event can be something the browser does, or something a user does.
/*Here are some examples of HTML events:
  -An HTML web page has finished loading
  -An HTML input field was changed
  -An HTML button was clicked*/


/*-Often, when events happen, you may want to do something.
-JavaScript lets you execute code when events are detected.
-HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.*/


//-With single quotes:
//<element event='some JavaScript'>
//-With double quotes:
<
element event = "some JavaScript" > < /element>