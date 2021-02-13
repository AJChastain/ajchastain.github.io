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