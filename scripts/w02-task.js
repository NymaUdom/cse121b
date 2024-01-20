/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Declare and instantiate a variable to hold your name. 
// Identify the variable as "fullName".

const fullName = "Enoima E. Margaret Udom";

// Declare and instantiate a variable to hold the current year. 
// Identify the variable as "currentYear".
const currentDate = new Date();

const currentYear = currentDate.getFullYear();

console.log("Current Year:", currentYear);

// Declare and instantiate a variable to hold the file path (location) 
// and file name of the image that you placed in the images folder as a string. 
// Identify the variable as "profilePicture".

const profilePicture = 'images/myprofile.jpg';

console.log("Profile Picture:", profilePicture);


/* Step 3 - Element Variables */

// Use document.getElementById() to get the HTML element with the id of "name"
// and store it in a const variable named "nameElement".
const nameElement = document.getElementById('name');

// Use document.getElementById() to get the HTML element with the id of "food"
// and store it in a const variable named "foodElement".
const foodElement = document.getElementById('food');

// Use document.querySelector() to get the element with the id of "year"
// and store it in a variable named "yearElement".
const yearElement = document.querySelector('#year');

// Use document.getElementById() to get the HTML element with the id of "profileImage"
// and store it in a const variable named "imageElement".
const imageElement = document.getElementById('profileImage');

console.log("Content of nameElement:", nameElement.textContent);
console.log("Content of foodElement:", foodElement.textContent);
console.log("Content of yearElement:", yearElement.textContent);
console.log("Content of imageElement:", imageElement.getAttribute('src'));

/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value.
// Surround the fullName value with <strong> tags.
// Use a template literal to create the string with HTML tags.

nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element.
// Set its value to the file path variable set in Step 2.
imageElement.setAttribute('src', profilePicture);

// Use the setAttribute method to set the alt property of the image element.
// Set its value to equal 'Profile image of [Insert Name Variable]'.
// Use a template literal to create the string.
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

// Declare an array variable to hold your favorite foods.
const favoriteFoods = ['Eguzi', 'Vegatable soup', 'Ekpang', 'Jollof rice', ' Plantain'];

console.log("Favorite Foods:", favoriteFoods);

// Assign the foodElement's innerHTML property the favoriteFoods array value.
// Use a template literal to create an unordered list (ul) with list items (li) for each favorite food.

foodElement.innerHTML = `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Declare and instantiate a variable to hold another single favorite food item.
const additionalFavoriteFood = 'Pepper soup';

console.log("Favorite Foods:", favoriteFoods);

console.log("Additional Favorite Food:", additionalFavoriteFood);

// Add the value stored in the new variable to your favorite food array.
favoriteFoods.push(additionalFavoriteFood);

console.log("Updated Favorite Foods:", favoriteFoods);

// Append the new array values onto the displayed content of the HTML element with the id of "food".
foodElement.innerHTML += `<br><ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Remove the first element in the favorite food array.
favoriteFoods.shift();

// Again, append the array output showing the modified array, using a line break as shown in step 5.5.
foodElement.innerHTML += `<br><ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Remove the last element in the favorite food array.
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array. Hint: Step 5.5.
foodElement.innerHTML += `<br><ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;
