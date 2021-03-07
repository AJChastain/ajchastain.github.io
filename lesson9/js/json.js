const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  //  console.table(jsonObject);

const towns = jsonObject['towns'];
const home = ['town.name("Fish Haven", "Preston", "Soda Springs")'];

const cards = document.querySelector('.cards');

/*towns.forEach(town => {*/
towns.forEach(town => {

    let card = document.createElement('section');
    
    let h2 = document.createElement('h2');
    h2.innerHTML = `${town.name}` ;
    card.append(h2);
    cards.append(card);

    let motto = document.createElement('motto');
    motto.innerHTML = `${town.motto}` ;
    card.append(motto);
    cards.append(card);

    let yearFounded = document.createElement("yearFounded");
    yearFounded.innerHTML = "Founded in: " + `${town.yearFounded}` ;
    card.append(yearFounded);
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
    image.setAttribute = towns[`${('src', 'images/PrestonIdaho.jpg')}`];
   /* image.setAttribute = `${images/FishHaven.jpg}`;
    image.setAttribute = `${images/SodaSprings.jpg}`;*/
    card.append(image);
    cards.append(card);

    let alt = document.createElement("alt");
    


   

});

/*for (let i = 1; i < towns.length; i++ )    
{


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
  
*/

  });

  /*wireframe links for personal reference:

  Mobile https://wireframe.cc/okvuRx
  Tablet https://wireframe.cc/2rB9Cn
  Desktop https://wireframe.cc/HXRaSW

  */