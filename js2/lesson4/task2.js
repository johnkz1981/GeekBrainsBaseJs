'use strict';

const cities = document.getElementById('cities');
const citiesArr = [];

fetch('russiaLocality.json')
    .then(result => {
      return result.json();
    })
    .then(data => {
      for (const city of data) {
        citiesArr.push(`<option value="${city.name}">${city.name}</option>`);
      }
      cities.innerHTML = citiesArr.sort();
    })
    .catch(error => console.log(error));