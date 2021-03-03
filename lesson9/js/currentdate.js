//const modified = new Date();

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);



function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 


    let Today = new Date();
    let Day = Today.getDay();
    let aside = document.getElementById("pancakes");
    if (Day == 5) {
      aside.style.display = (aside.style.display == "block") ? "none" : "block";
}

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {img.removeAttribute("data-src")};
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});


//Credit to Shannon Cupido for the following code. 
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

//JSON
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

const towns = jsonObject["towns"];
for (let i = 0; i < towns.length; i++ ) {
let card = document.createElement("section");

let h2 = document.createElement("h2");
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
    image.setAttribute("src", towns[i].imageurl);
    card.appendChild(image); 

let alt = document.createElement("alt");
    alt.setAttribute("alt", towns[i].name + ", " + "Idaho");
    card.appendChild(alt);

    document.querySelector("div.cards").appendChild(card);
     
}

  });

