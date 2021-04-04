//Current date display
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);

//Toggle hamburger for main nav
function toggleNav() {
    document.getElementsByClassName("navbar")[0].classList.toggle("response");
} 
/*function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");*/
//} 

//Directory


/*const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = "https://ajchastain.github.io/json/directory.json";
let request = new XMLHttpRequest();  
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = directme() {
    const directory = request.response;
    business(busName);
    location(address, cityzip);
    callme(phone);
    webs(site);
    pic(logo);
}*/

const requestURL ='https://ajchastain.github.io/final/json/directory.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
 

const business = jsonObject['busName'];

const cards = document.querySelector('.cards');

let card = document.createElement('section');
    
   
    let h2 = document.createElement('h2');
    h2.innerHTML = `${directory.busName}` ;
    card.append(h2);
    cards.append(card);

    let address = document.createElement('address');
    address.innerHTML = `${directory.address}`;
    card.append(address);
    cards.append(card);

    let city = document.createElement("city");
    city.innerHTML = "Founded in: " + `${directory.cityzip}` ;
    card.append(cityd);
    cards.append(card);

    let currentPopulation = document.createElement("currentPopulation");
    currentPopulation.innerHTML = "Population: " + `${town.currentPopulation}` ;
    card.append(currentPopulation);
    cards.append(card);

    let averageRainfall = document.createElement("averageRainfall");
    averageRainfall.innerHTML = "Annual rainfall: " + `${town.averageRainfall}` ;
    card.append(averageRainfall);
    cards.append(card);

    let image = document.createElement("img");
   
    image.setAttribute("src", `images/${town.photo}`);
    image.setAttribute("alt", town.name + " photo");
  

    card.append(image);
    cards.append(card);
      
});


  });

