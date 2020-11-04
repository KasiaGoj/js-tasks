//city: kolejne elementy tablicy
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow', 'Szczecin'];

let cityList = document.createElement('ol');


//listItem: znacznik przechowujący tekst 
for ( let city of cities) {
  let listItem = document.createElement('li');
  listItem.className = "city";
  listItem.innerText = city;
  cityList.appendChild(listItem);
}

//let myNewList = document.getElementById('city-list');
// myNewList.appendChild(cityList);
document.getElementById('city-list').appendChild(cityList);