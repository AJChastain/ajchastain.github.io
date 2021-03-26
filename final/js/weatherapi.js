//const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5404024&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
const apiURL =
"https://api.openweathermap.org/data/2.5/onecall?lat=37.4947&lon=-120.8466&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
//"https://api.openweathermap.org/data/2.5/forecast/?id=5404024&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //---------Current Weather------------
    //temp
    document.getElementById(
      "current-temp"
    ).textContent = jsObject.current.temp.toFixed(0);
    document
      .getElementById("current-temp")
      .setAttribute("data-id", jsObject.current.temp.toFixed(0));

    //current weather icon
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      jsObject.current.weather[0].icon +
      ".png";
    const desc = jsObject.current.weather[0].description;
    document.getElementById("currently").textContent = desc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);

    //humidity
    document.getElementById("humidity").textContent =
      jsObject.current.humidity;

    //Wind speed  
    document.getElementById(
      "wind_speed"
    ).textContent = jsObject.current.wind_speed.toFixed(0);


    //wind chill reattempt
    var temp = parseFloat(jsObject.current.temp);
    var ws = parseFloat(jsObject.current.wind_speed);
    var chill = calcChill(temp, ws);
    document.getElementById("wind_chill").textContent = chill;
    function calcChill(temp, ws) {
        if (temp < 61 && ws > 0) {
          var exp = Math.pow(ws, 0.16);
          var chilled = 35.74 + 0.6215 * temp - 35.75 * exp + 0.4275 * temp * exp;
          chilled = chilled.toFixed(0);
        } else {
          chilled = "(N/A)";
        }
        return chilled;
      }


    //three-day forecast
    const turlock = jsObject["daily"];
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
    for (i = 1; i < turlock.length; i++) {
      //var dt = turlock[i].dt;
     // var time = dt.includes("18:00:00");
      if /*(time == true &&*/ (a < 3) {
        var temperature = turlock[i].temp.day.toFixed(0);
        document.getElementById(`hightemp${a + 1}`).innerHTML = temperature;
        document.getElementById(`icon${a + 1}`).setAttribute("src", weatherLogo + turlock[i].weather[0].icon + "@2x.png");
        document.getElementById(`icon${a + 1}`).setAttribute("alt", turlock[i].weather[0].description);
        a++;
      }
      for (let a = 1; a < 4; a++) {
        document.getElementById(`dayname${a}`).textContent = weekdays[today + a];
      }
     
    }
    //Alerts  
    function weatherAlert() {
     alert("Hello!");
    }
     //jsObject.alert.description;
    /*document.getElementById("alert").textContent=*/  
    

  });
