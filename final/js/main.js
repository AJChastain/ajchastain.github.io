//Current date display
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);

//Toggle hamburger for main nav
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} 




    