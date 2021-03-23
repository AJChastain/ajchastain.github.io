//Current date display
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-us", options);

//Toggle hamburger for main nav
function toggleNav() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
} 




    