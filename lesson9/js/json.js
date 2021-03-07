const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  //  console.table(jsonObject);

const towns = jsonObject['towns'];

const home = [
    towns.find((town) => town.name == "Fish Haven"),
    towns.find((town) => town.name == "Preston"),
    towns.find((town) => town.name == "Soda Springs"),];

const cards = document.querySelector('.cards');


home.forEach(town => {

    let card = document.createElement('section');
    
   
    let h2 = document.createElement('h2');
    h2.innerHTML = `${town.name}` ;
    card.append(h2);
    cards.append(card);

    let motto = document.createElement('motto');
    motto.innerHTML = `${town.motto}`;
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
   
    image.setAttribute("src", `images/${town.photo}`);
    image.setAttribute("alt", town.name + " photo");
  

    card.append(image);
    cards.append(card);
      
});


  });





  /*wireframe links for personal reference:

  Mobile https://wireframe.cc/okvuRx
  Tablet https://wireframe.cc/2rB9Cn
  Desktop https://wireframe.cc/HXRaSW

  */