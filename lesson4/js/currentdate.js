let modified = new Date(document.lastModified);
document.getElementById("lastModif").innerHTML = modified;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}