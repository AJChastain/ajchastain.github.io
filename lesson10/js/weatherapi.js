//const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //---------Current Weather------------
    //temp
    document.getElementById(
      "current-temp"
    ).textContent = jsObject.list[0].main.temp.toFixed(0);
    document
      .getElementById("current-temp")
      .setAttribute("data-id", jsObject.list[0].main.temp.toFixed(0));

    //current weather icon
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      jsObject.list[0].weather[0].icon +
      ".png";
    const desc = jsObject.list[0].weather[0].description;
    document.getElementById("currently").textContent = desc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);

    //humidity
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById(
      "wind_speed"
    ).textContent = jsObject.list[0].wind.speed.toFixed(0);

    //five-day forecast chaos
    const windcheck = jsObject["list"];
    let d = new Date();
    let today = d.getDay();

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var weatherLogo = "https://openweathermap.org/img/wn/";

    let a = 0;
    for (i = 0; i < windcheck.length; i++) {
      var dt = windcheck[i].dt_txt;
      var time = dt.includes("18:00:00");
      if (time == true && a < 5) {
        var temperature = windcheck[i].main.temp.toFixed(0);
        document.getElementById(`hightemp${a + 1}`).innerHTML = temperature;
        document.getElementById(`icon${a + 1}`).setAttribute("src", weatherLogo + windcheck[i].weather[0].icon + "@2x.png");
        document
          .getElementById(`icon${a + 1}`)
          .setAttribute("alt", windcheck[i].weather[0].description);
        a++;
      }
      for (let a = 1; a < 6; a++) {
        document.getElementById(`dayname${a}`).textContent =
          weekdays[today + a];
      }
    }
    
  });
