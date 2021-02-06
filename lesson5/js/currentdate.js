//const modified = new Date();

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);



function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 

function banner() {
    let today = new Date();
    if (today.getDay =="5") {
        document.getElementById("pancakes").style.display = "block";
}}