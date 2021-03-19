const galimages = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.onload = () => {img.removeAttribute("data-src")};
}

const galimgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const galimgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            galimgObserver.unobserve(entry.target);
        }
    });
}, galimgOptions);

galimages.forEach(image => {
    galimgObserver.observe(image);
});

