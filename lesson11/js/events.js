const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  console.table(jsonObject);

const towns = jsonObject['towns'];


//Preston
const home = [
towns.find((town) => town.name == "Preston"),
//towns.find((town) => town.name == "Fish Haven"),
//towns.find((town) => town.name == "Soda Springs"),
];

const cards = document.querySelector('.cards2');
home.forEach(town => {
  
  let card = document.createElement('section'); 
  let h2 = document.createElement('h2');
  h2.innerHTML = "Upcoming Events" ;
  card.append(h2);
  cards.append(card);

  let events = document.createElement("events");
  events.innerHTML = town.events[0] + "<br>" +
    town.events[1] + "<br>" + town.events[2] + "<br>";
  card.append(events);
  cards.append(card);
});




  });
