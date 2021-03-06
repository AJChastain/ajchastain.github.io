const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

const towns = jsonObject['towns'];

/*
towns.forEach(towns => {
*/
for (let i = 1; i < towns.length; i++ )
    
{
/*towns.splice(2, 1);*/

let card = document.createElement('section');

let h2 = document.createElement('h2');
    h2.textContent = towns[i].name;
    card.appendChild(h2);

let motto = document.createElement("motto");
    motto.textContent = towns[i].motto;
    card.appendChild(motto);

let yearFounded = document.createElement("yearFounded");
    yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
    card.appendChild(yearFounded);

let pop = document.createElement("currentPopulation");
    pop.textContent = "Population: " + towns[i].currentPopulation;
    card.appendChild(pop);

let rain = document.createElement("averageRainfall");
    rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
    card.appendChild(rain);

let image = document.createElement("img");
    image.setAttribute("src", towns[i].photo);
    card.appendChild(image); 

let alt = document.createElement("alt");
    alt.setAttribute("alt", towns[i].name + ", " + "Idaho");
    card.appendChild(alt);

    document.querySelector('div.cards').appendChild(card);
   
};
  




  });