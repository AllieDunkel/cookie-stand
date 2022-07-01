"use strict";

// let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
//   '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let seattle = {
//   location: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   numOfCustomerEachHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustPerHour: function() {
//     for (let i = 0; i < storeHours.length; i++) {
//       this.numOfCustomerEachHour.push(getRandomNumber(this.minCust, this.maxCust));
//       console.log(this.minCust, this.maxCust);
//     }
//   },
//   getCookiesPerHour: function() {
//     this.getCustPerHour();
//     for (let i = 0; i < storeHours.length; i++) {
//       let cookPerHour = Math.ceil(this.numOfCustomerEachHour[i] * this
//         .avgCookieSale);
//       this.cookiesPerHour.push(cookPerHour);
//       this.totalCookies = this.totalCookies + cookPerHour;
//     }
//   },
//   render() {
//     this.getCookiesPerHour();
//     let unorderedList = document.getElementById('seattle');

//     for (let i = 0; i < storeHours.length; i++) {
//       let listItem = document.createElement('li')
 

//       listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       unorderedList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = `Total Cookies: ${this.totalCookies}`;
//     unorderedList.appendChild(listTotal);
//   }
// };



// seattle.render();


// let tokyo = {
//     location: 'tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookieSale: 1.2,
//     numOfCustomerEachHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function() {
//       for (let i = 0; i < storeHours.length; i++) {
//         this.numOfCustomerEachHour.push(getRandomNumber(this.minCust, this
//           .maxCust));
//       }
//     },
//     getCookiesPerHour: function() {
//       this.getCustPerHour();
//       for (let i = 0; i < storeHours.length; i++) {
//         let cookPerHour = Math.ceil(this.numOfCustomerEachHour[i] * this
//           .avgCookieSale);
//         this.cookiesPerHour.push(cookPerHour);
//         this.totalCookies = this.totalCookies + cookPerHour;
//       }
//     },
//     render() {
//       this.getCookiesPerHour();
//       let unorderedList = document.getElementById('tokyo');
  
//       for (let i = 0; i < storeHours.length; i++) {
//         let listItem = document.createElement('li')
    
//         listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//         unorderedList.appendChild(listItem);
//       }
//       let listTotal = document.createElement('li');
//       listTotal.textContent = `Total Cookies: ${this.totalCookies}`;
//       unorderedList.appendChild(listTotal);
//     }
//   };
  
  
//   tokyo.render();


//   let dubai = {
//     location: 'dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookieSale: 3.7,
//     numOfCustomerEachHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function() {
//       for (let i = 0; i < storeHours.length; i++) {
//         this.numOfCustomerEachHour.push(getRandomNumber(this.minCust, this
//           .maxCust));
//       }
//     },
//     getCookiesPerHour: function() {
//       this.getCustPerHour();
//       for (let i = 0; i < storeHours.length; i++) {
//         let cookPerHour = Math.ceil(this.numOfCustomerEachHour[i] * this
//           .avgCookieSale);
//         this.cookiesPerHour.push(cookPerHour);
//         this.totalCookies = this.totalCookies + cookPerHour;
//       }
//     },
//     render() {
//       this.getCookiesPerHour();
//       let unorderedList = document.getElementById('dubai');

//       for (let i = 0; i < storeHours.length; i++) {
//         let listItem = document.createElement('li')
 
//         listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//         unorderedList.appendChild(listItem);
//       }
//       let listTotal = document.createElement('li');
//       listTotal.textContent = `Total Cookies: ${this.totalCookies}`;
//       unorderedList.appendChild(listTotal);
//     }
//   };
  
  
  
//   dubai.render();

//   let paris = {
//     location: 'paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookieSale: 2.3,
//     numOfCustomerEachHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function() {
//       for (let i = 0; i < storeHours.length; i++) {
//         this.numOfCustomerEachHour.push(getRandomNumber(this.minCust, this
//           .maxCust));
//       }
//     },
//     getCookiesPerHour: function() {
//       this.getCustPerHour();
//       for (let i = 0; i < storeHours.length; i++) {
//         let cookPerHour = Math.ceil(this.numOfCustomerEachHour[i] * this
//           .avgCookieSale);
//         this.cookiesPerHour.push(cookPerHour);
//         this.totalCookies = this.totalCookies + cookPerHour;
//       }
//     },
//     render() {
//       this.getCookiesPerHour();
//       let unorderedList = document.getElementById('paris');
  
//       for (let i = 0; i < storeHours.length; i++) {
//         let listItem = document.createElement('li')
     
//         listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//         unorderedList.appendChild(listItem);
//       }
//       let listTotal = document.createElement('li');
//       listTotal.textContent = `Total Cookies: ${this.totalCookies}`;
//       unorderedList.appendChild(listTotal);
//     }
//   };

  
  
//   paris.render();

//   let lima = {
//     location: 'lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookieSale: 4.6,
//     numOfCustomerEachHour: [],
//     cookiesPerHour: [],
//     totalCookies: 0,
//     getCustPerHour: function() {
//       for (let i = 0; i < storeHours.length; i++) {
//         this.numOfCustomerEachHour.push(getRandomNumber(this.minCust, this
//           .maxCust));
//       }
//     },
//     getCookiesPerHour: function() {
//       this.getCustPerHour();
//       for (let i = 0; i < storeHours.length; i++) {
//         let cookPerHour = Math.ceil(this.numOfCustomerEachHour[i] * this
//           .avgCookieSale);
//         this.cookiesPerHour.push(cookPerHour);
//         this.totalCookies = this.totalCookies + cookPerHour;
//       }
//     },
//     render() {
//       this.getCookiesPerHour();
//       let unorderedList = document.getElementById('lima');

//       for (let i = 0; i < storeHours.length; i++) {
//         let listItem = document.createElement('li')
    
//         listItem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//         unorderedList.appendChild(listItem);
//       }
//       let listTotal = document.createElement('li');
//       listTotal.textContent = `Total Cookies: ${this.totalCookies}`;
//       unorderedList.appendChild(listTotal);
//     }
//   };
  

  
  
//   lima.render();


//   function getRandomNumber(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
  // }

 

function footerHourlyStoreTotals(){
  let cookieTotal = 0;
  let tFoot = document.getElementById('tableFooter');
  // tFoot.innerHTML = '';
  let tr = document.createElement('tr');
  tFoot.appendChild(tr);

  let tdTitle = document.createElement('td');
  tdTitle.textContent = 'Totals';
  tr.appendChild(tdTitle);

  for(let i = 0; i < cookiesTotalHour.length; i++){
    let cookiesForThisHour = cookiesTotalHour[i];
    cookieTotal += cookiesForThisHour;
    let cookieHourlyTotals = document.createElement('td');
    cookieHourlyTotals.textContent = cookiesForThisHour;
    tr.appendChild(cookieHourlyTotals);
  }
   let cookieTotals = document.createElement('td');
   cookieTotals.textContent = cookieTotal;
   tr.appendChild(cookieTotals);
}

  //Global variables
  let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  let cookiesTotalHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  //Constructor Function
  function StoreLocation (locationName, minCust, maxCust, averageSales){
  this.locationName = locationName;
  this.minCust =  minCust;
  this.maxCust = maxCust;
  this.averageSales = averageSales;
  // this.cookiesTotalHour= [];
  this.cookiesSold = [];
  //Run our cookies-per-hour
  this.numOfCookiesPerHour();
  // this.cookiesPerHour = [];
  //Add the new store to our "catalog array"
  StoreLocation.storeSites.push(this);
  }



  StoreLocation.storeSites = [];

  StoreLocation.prototype.numOfCookiesPerHour = function() {
    for(let i=0; i < storeHours.length; i++){
      this.cookiesSold[i] = Math.ceil(this.getRandomCustomersPerHour() * this.averageSales); 
    }
  };

  StoreLocation.prototype.getRandomCustomersPerHour= function(){
    return Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }

  //prototype to string that returns location name and average sales
  StoreLocation.prototype.render = function () {
    //let's also count total cookies 
    let cookieTotal = 0;
    //find parent <tbody> for this location by id
    let tbody = document.getElementById('storeData');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    let tdLocationName = document.createElement('td');
    tdLocationName.textContent = this.locationName;
    tr.appendChild(tdLocationName);

    //for each hour the store is open...
    for (let i=0; i <storeHours.length; i++) {
      let cookiesForThisHour = this.cookiesSold[i];
      cookiesTotalHour[i] += cookiesForThisHour;
      cookieTotal = cookieTotal + cookiesForThisHour;

      let cookieHourlyData = document.createElement('td');
      cookieHourlyData.textContent = cookiesForThisHour;
      tr.appendChild(cookieHourlyData);
    }
    let cookieTotalsTD = document.createElement('td');
    cookieTotalsTD.textContent = cookieTotal;
    tr.appendChild(cookieTotalsTD);
  };

  StoreLocation.renderAll = function() {
    for(let i = 0; i < StoreLocation.storeSites.length; i++) {
      StoreLocation.storeSites[i].render();
    }
  
    footerHourlyStoreTotals();
  }
  

  let seattle = new StoreLocation('seattle', 23, 65, 6.3, 0)
  let tokyo = new StoreLocation('tokyo', 3, 24, 1.2, 0)
  let dubai = new StoreLocation('dubai', 11, 38, 3.7, 0)
  let paris = new StoreLocation('paris', 20, 38, 2.8, 0)
  let lima = new StoreLocation('lima', 2, 16, 4.6, 0)
  
  
  StoreLocation.renderAll();

