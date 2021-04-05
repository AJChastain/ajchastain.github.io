//Current date display
const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);

//Toggle hamburger for main nav
function toggleNav() {
    document.getElementsByClassName("navbar")[0].classList.toggle("response");
}


//Directory

const requestURL = 'https://ajchastain.github.io/final/json/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const listings = jsonObject['directory'];
        for (let i = 0; i < listings.length; i++) {


            const business = listings[i].busName;

            const cards = document.querySelector('.cards');
            let card = document.createElement('section');

            let image = document.createElement("img");
            image.setAttribute("src", `${listings[i].logo}`);
            image.setAttribute("alt", listings[i].busName + " logo");
            card.append(image);
            cards.append(card);

            let h2 = document.createElement('h2');
            h2.innerHTML = `${listings[i].busName}`;
            card.append(h2);
            cards.append(card);

            let address = document.createElement('address');
            address.innerHTML = `${listings[i].address}` + "<br>";
            card.append(address);
            cards.append(card);

            let city = document.createElement("city");
            city.innerHTML = `${listings[i].cityzip}` + "<br>";
            card.append(city);
            cards.append(card);

            let phone = document.createElement("phone");
            phone.innerHTML = `${listings[i].phone}` + "<br>";
            card.append(phone);
            cards.append(card);

            let site = document.createElement("website");
            site.innerHTML = "<a href=" + `${listings[i].site}` + ">" + `${listings[i].site}` + "</a>" + "<br>";
            card.append(site);
            cards.append(card);


        };
    });


function toggleCards() {
    let gridview = document.getElementsByClassName("cards")[0];
    gridview.classList.toggle("grid");
    button.innerHTML = "&#9776;" ;
}
