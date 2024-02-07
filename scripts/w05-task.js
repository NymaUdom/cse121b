/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.getElementById("temples");

// Declare a global empty array variable to store a list of temples named templeList.
const templeList = [];

/* async displayTemples Function */
// Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
const displayTemples = (temples) => {
// Create a forEach loop that iterates over each object in the temples array.
    temples.forEach((temples) => {
// Create an HTML <article> element (createElement).
        const articleElement = document.createElement("article");
// Create an HTML <h3> element and add the temple's templeName property to this new element.
        const h3Element = document.createElement("h3");
        h3Element.textContent = temples.templeName;
// Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        const imgElement = document.createElement("img");
        imgElement.src = temples.imageUrl;
        imgElement.alt = temples.location;

// Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

// Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(articleElement);

    });
};

/* async getTemples Function using fetch()*/
// Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        
        if(!response.ok) {
            console.error(`Error fetching temples data. Status: ${response.status}`);
            return;
        }
        // convert the response to a JavaScript object
        const data = await response.json();

        // Assign the result to the templeList global array variable.
        templeList.push(...data);

        // Call the displayTemples function and pass it the list of temples
        displayTemples(templeList);

        // continue with the login for handling the responsse
    } catch (error) {
        console.error(`Error fetching temple data: ${error.message}`);

    }
};

// Log the templeList to the console for review
console.log(templeList);


/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
// Declare a function expression named filterTemples.
// The function should accept a argument in a parameter named temples.
const filterTemples = () => {
    // Call the reset function to clear the output.
    reset();
    // Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
    const filter = document.getElementById("filtered").value;
    // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        case "utah":
            // Implement login for filtering temples in utah.
            const utahTemples = temples.filter(temp => temp.location.includes("Utah"));
            // Call the displayTemples function
            displayTemples(utahTemples);
            break;

        case "notutah":
            // Implement login for filtering temples outside of utah.
            const nonUtahTemples = temples.filter(temp => !temp.location.includes("Utah"));
            // Call the displayTemples function with the filtered temples.
            displayTemples(nonUtahTemples);
            break;

        case "older":
            // Implement login for filtering temples built before 1950.
            const olderTemples = temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1,));
            // Call the displayTemples function with the filtered temples.
            displayTemples(olderTemples);
            break;

        case "all":
            // Implement login for displaying all temples.
            displayTemples(temples);
            break;

        default:
            console.log("Invalid filter value");
    }
};

getTemples();

/* Event Listener */
// Add a change event listener to the HTML element with an ID of filtered 
//that calls the filterTemples function and sends a arrow function result with the templeList as the argument.
document.getElementById("filtered").addEventListener("change", () => {
    filterTemples(templeList);
});