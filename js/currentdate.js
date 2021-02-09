let d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

let modified = new Date(document.lastModified);
document.getElementById("lastModif").innerHTML = modified;

WebFont.load({
    google: {
      families: [
         'Spectral'
      ]
    }
  });