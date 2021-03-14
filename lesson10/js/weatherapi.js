//const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
const apiURL="https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp.toFixed(0); 
     
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
        
        
        const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
        document.getElementById('currently').textContent = desc;
      
       // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
   
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.list[0].wind.speed.toFixed(0);
        
        
        const windcheck = jsObject['list'];
        let day;  
        //Tried to put a loop here and failed
        for (day = 0; day < windcheck.length; day++  ) {


        
        
                  
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(windcheck[day].dt_txt);
        console.log(d);
        document.getElementById(`dayname${day +1}`).textContent = weekdays[d.getDay()];

        let h = windcheck[day].main.temp.toFixed(0);
        document.getElementById(`hightemp${day +1}`).textContent = h;

        const imagesrc1 = 'https://openweathermap.org/img/w/' + windcheck[day].weather[0].icon + '.png';
        let pic = windcheck[day].weather[0].icon;
        document.getElementById(`icon${day +1}`).setAttribute('src', imagesrc1);
       }
  
    });



   
    