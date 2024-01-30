/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {

    name: "Enoima E. Margaret Udom",
    photo:  "images/myprofile.jpg",
    favoriteFoods: [
        "Rice",
        "Beans",
        "Eguzi",
        "Ekpang",
        "Afang",
        "Fish",
        "Plantain"
    ],
    hobbies: [
        "Coding",
        "Cooking",
        "Social Media",
        "Traveling",
        "Family Time"
    ],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Lagos",
        length: "10 years", 
    },
    {
        place: "Port Harcourt",
        length: "7 years",
    },
    {
        place: "Calabar",
        length: "5 years",
    }

);


/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});

const placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    const placeContainer = document.createElement('div');

    const termElement = document.createElement('dt');

    termElement.textContent = place.place;

    const descriptionElement = document.createElement('dd');

    descriptionElement.textContent = place.length;

    placeContainer.appendChild(termElement);
    placeContainer.appendChild(descriptionElement);

    placesLivedList.appendChild(placeContainer);

    
});
/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


