// /*
//   FILE app.js
//   @date 2022-06-27
// */
'use strict';

// Global variables
// let storeLocation;

// let AvgCookieSales = 0;
let storeHours =['6am ' ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];


let storeLocation = [
  'seattle',
  'tokyo',
  'dubai',
  'paris',
  'lima'
];


// eslint-disable-next-line no-unused-vars
function initialize() {
  console.log('In initialize()');
  // initialzie the location data - not usually done this way
  storeLocation = [];

  // let cookieSales = document.getElementById('cookieSales');

  // let storeHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  //   '2pm', '3pm', '4pm', '5pm', '6pm','7pm','8pm',];

  let seattle = {
    location: 'seattle',
    numOfCustomers: getRandomNumber(23, 65),
    avgCookieSales: 6.3,
    finalCount: [],
    totalCookies:0,
    getAge: function () {
      console.log(this.location);
      console.log(this.numOfCustomers);
    } ,
  };
  storeLocation.push(seattle);

  let tokyo = {
    location: 'tokyo',
    numOfCustomers: getRandomNumber(3, 24),
    avgCookieSales: 1.2,
    finalCount: [],
    totalCookies: 0,
    getAge: function () {
      console.log(this.location);
      console.log(this.numOfCustomers);
    } ,
  };
  storeLocation.push(tokyo);


  let dubai = {
    location: 'dubai',
    numOfCustomers: getRandomNumber(11, 38),
    avgCookieSales: 3.7,
    finalCount: [],
    totalCookies:0,
    getAge: function () {
      console.log(this.location);
      console.log(this.numOfCustomers);
    } ,
  };
  storeLocation.push(dubai);

  let paris = {
    location: 'paris',
    numOfCustomers: getRandomNumber(20, 38),
    avgCookieSales: 2.3,
    finalCount: [],
    totalCookies:0,
    getAge: function () {
      console.log(this.location);
      console.log(this.numOfCustomers);
    } ,
  };
  storeLocation.push(paris);


  let lima = {
    location: 'lima',
    numOfCustomers: getRandomNumber(2, 16),
    avgCookieSales: 4.6,
    finalCount: [],
    totalCookies:0,
    getAge: function () {
      console.log(this.location);
      console.log(this.numOfCustomers);
    } ,
  };
  storeLocation.push(lima);


  // loop quicky through the locations and log their info
  logLocations();

  // logLocations();
}

/**
 * Loop through the locations and display their locations and the average number of customers
 */
function logLocations() {
  for (let i = 0; i < storeLocation.length; i++) {
    // location[i] is the current location object
    let output = `The average number of customers is ${storeLocation[i].numOfCustomers} and the average number of
     cookies sold is ${storeLocation[i].avgCookieSales}.`;
    console.log(`Index ${i}: ${output}`);
  }
}

/**
 * Derive an a random number in years
 *
 * @param {number } min - the minimum number of years
 * @param {number} max - the maximum number of years
 * @returns {number} - the random number in years
 */
function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// /**
//  * Displays a randomly selected kitten on the page
//  */
// function displayRandomStoreLocation() {
//   // Get a random index
//   let randomIndex = getRandomStoreLocationIndex();
//   // Build an article with sub-elements for the kitten
//   let display = buildStoreLocationDisplay(kittens[randomIndex]);
//   // get the div from the index page
//   let div = document.getElementById('StoreLocationProfiles');
//   // clear the div and then add the article to the div
//   div.innerHTML = '';
//   div.appendChild(display);
// }

/**
 * Return a random index that is not the same as the previous index.
 *
 * @returns {number} - the index
 */
// function getRandomStoreLocationIndex() {
//   let number = 0;
//   if (kittens.length > 1) {
//     // Only do this part if there is more than one kitten
//     let needed = true;
//     while (needed) {
//       let randomIndex = Math.floor(Math.random() * storeLocation.length);
//       if (randomIndex !== lastStoreLocationIndex) {
//         number = randomIndex;
//         lastStoreLocationIndex = number;
//         needed = false;
//       }
//     }
//   }
//   return number;
// }

/**
 * Builds the HTML to display a location
 *
 * @param {kitten} location - a location object
 * @returns {Element} - An HTML element containing a location display data
 */
// function buildLocationDisplay(storeLocation) {

//   // Use the document object to create an artlicle element
//   let article = document.createElement('article');
//   let h2 = document.createElement('h2');
//   h2.innerText = storeLocation.location;
//   article.appendChild(h2);

//   // Add the age as a paragraph
//   let p = document.createElement('p');
//   p.innerText = `The average number of customers is ${storeLocation[i].numOfCustomers} and the average number of
//    cookies sold is ${storeLocation[i].avgCookieSales}.`;
//   article.appendChild(p);

//   // list of interests
//   let ul = document.createElement('ul');
//   for (let i = 0; i < storeHours.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = [i];
//     ul.appendChild(li);
//   }
//   article.appendChild(ul);

// }
