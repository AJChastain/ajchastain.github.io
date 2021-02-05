//const modified = new Date();

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);



function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 

function satBanner () {
    if weekday == "Friday" {
        display: "Saturday = Preston Pancakes in the Park! 9:00A.M. Saturday at the city park pavilion."

}}