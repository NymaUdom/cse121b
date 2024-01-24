/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(num1, num2) {
    // In the function body, return the sum of the parameters num1 and num2.
    return num1 + num2;
}

/* Function Declaration - Add Numbers */
// Using a function declaration, define another function named addNumbers that gets the values
// of two HTML form controls with IDs of add1 and add2.
function addNumbers() {
    
    let addNum1 = parseFloat(document.querySelector('#add1').value);
    let addNum2 = parseFloat(document.querySelector('#add2').value);

    // Next, in the addNumbers function, call the add function using those two arguments
    // and assign the return value to an HTML form element with an ID of sum
    
    document.getElementById('sum').value = add(addNum1, addNum2);
}

// Add a "click" event listener to the HTML button with an ID of addNumbers
// that calls the addNumbers function. This line of code is NOT located inside a function. Why?
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (num1, num2) {
    return num1 - num2;
};

const subtractNumbers = function () {
    // Retrieve Input Values
    let subtractNum1 = parseFloat(document.querySelector('#subtract1').value);
    let subtractNum2 = parseFloat(document.querySelector('#subtract2').value);

    // Call the subtract Function
    document.querySelector('#difference').value = subtract(subtractNum1, subtractNum2);
};

// Event Listener for the Subtract Button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    // Retrieve Input Values
    let factor1 = parseFloat(document.querySelector('#factor1').value);
    let factor2 = parseFloat(document.querySelector('#factor2').value);

    // Call the multiply Function
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Event Listener for the Multiply Button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

/* Function Declaration - Divide Numbers */
function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

function divideNumbers() {
    // Retrieve Input Values
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value);

    // Call the divide Function
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Event Listener for the Divide Button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// Add an event listener for the Get Total Due button when clicked that invokes the following functionality:
document.getElementById('getTotal').addEventListener('click', function () {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field.
    var subtotal = parseFloat(document.getElementById('subtotal').value);

    // Check IF the membership checkbox has been checked by the user to apply a 15% discount to the subtotal amount.
    var isClubMember = document.getElementById('member').checked;

    var discount = isClubMember ? 0.15 : 0;

    // Calculate the total due with or without the discount
    var totalDue = subtotal - (subtotal * discount);

    // Output the total to the total span in the format shown with two decimals using a template string.
    document.getElementById('total').textContent = `$ ${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13.
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array.
document.getElementById('array').textContent = numbersArray;

// Use the filter() array method to find all of the odd numbers of the array variable
// and assign the result to the HTML element with an ID of odds
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

// Use the filter() array method to find all of the even numbers of the array variable
// and assign the result to the HTML element with an ID of evens.
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

// Use the reduce() array method to sum the array variable elements
// and assign the result to the HTML element with an ID of sumOfArray
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

// Use the map() array method to multiple each element in the array variable by 2
// and assign the result to the HTML element with an ID of multiplied.
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
// Assign the result to the HTML element with an ID of sumOfMultiplied.
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, result) => sum + result, 0);

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector('#odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
