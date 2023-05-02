// Declare handler and support functions here

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };

// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerHTML;
    const parkBRating = parkB.querySelector(".rating-display .value").innerHTML; 

    const parkARatingFloat = parseFloat(parkARating);
    const parkBRatingFloat = parseFloat(parkBRating);

    if (parkARatingFloat < parkBRatingFloat) {
        return -1;
    } else if (parkARatingFloat > parkBRatingFloat) {
        return 1;
    } else {
        return 0;
    }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };

const ratingSorterClickHandler = (event) => {
event.preventDefault();

    // 1.  Get the main element
    const main = document.querySelector("main");

    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");

    // 3. Empty the main
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
    parksArray.sort(sortByRating);

    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};

// The code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);