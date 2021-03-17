const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);

const towns = jsonObject['towns'];

// Code inspired by Jeremiah Orcutt, who rocks at this.
/*let a = 0;
for (a = 0; a < towns.length; a++) {
  let town = towns[a].name;
  if (town == "Preston") {
    let event = towns[a].events.join('<br>');
    document.getElementById("cards2").textContent = event;
  }

  else if (town == "Fish Haven") {
    let event = towns[a].events.join('<br>');
    document.getElementById("cards3").textContent = event;
  }

  else if (town == "Soda Springs") {
    let event = towns[a].events.join('<br>');
    document.getElementById("cards4").textContent = event;
  }
}
*/
    
const home = [
  towns.find((town) => town.name == "Fish Haven"),
  towns.find((town) => town.name == "Preston"),
  towns.find((town) => town.name == "Soda Springs"),];

const cards = document.querySelector('.cards2');


home.forEach(town => {

  let card = document.createElement('section'); 
  let h2 = document.createElement('h2');
  h2.innerHTML = "Upcoming Events" ;
  card.append(h2);
  cards.append(card);

  let events = document.createElement("events");
  events.innerHTML = `${town.events}`;
  card.append(events);
  cards.append(card);
});
  });
