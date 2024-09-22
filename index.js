// Write your solution in this file!
// customerName: Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.

// Declare a global variable
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.tolowerCase();
}
// upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.

// function upperCaseCustomerName() {
//     customerName = customerName.toUpperCase();
// }
// setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.

// Function to declare a global variable bestCustomer
function setBestCustomer() {
    var bestCustomer = 'not BOB';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // This will change the global variable bestCustomer
}
// overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.

// Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'john';
//leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.

// Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'doe'; // This will cause an error
}

// Test the functions
upperCaseCustomerName();
console.log(customerName); // Output: 'BOB'

setBestCustomer();
overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'

console.log(leastFavoriteCustomer); // Output: 'john'
changeLeastFavoriteCustomer(); // This will throw an error
