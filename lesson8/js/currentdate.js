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