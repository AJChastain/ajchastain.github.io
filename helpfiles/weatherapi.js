//const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
const apiURL="https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=cc9663bac24d48ffba1cbf202d93ed9f&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.list[0].main.temp.toFixed(0);
        document.getElementById('current-temp').setAttribute("data-id", jsObject.list[0].main.temp.toFixed(0));
     
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
        
        
        const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
        document.getElementById('currently').textContent = desc;
      
       // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
   
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.list[0].wind.speed.toFixed(0);
        
        
        const windcheck = jsObject['list'];
        //------------------Tried to put a loop here and failed------------------
      /*   let d = new Date;
        let today = d.getDay();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
       for (let i = 0; i < windcheck.length; i++  ) { 
        
        let time = windcheck[i].dt_txt.includes('18:00:00')         
         let h = windcheck[i].main.temp.toFixed(0);
        document.getElementById(`hightemp${i +1}`).textContent = h;

        const imagesrc1 = 'https://openweathermap.org/img/w/' + windcheck[i].weather[0].icon + '.png';
        let pic = windcheck[i].weather[0].icon;
        document.getElementById(`icon${i +1}`).setAttribute('src', imagesrc1); 
        for(let j = 1; j < 6; j++){   
        document.getElementById(`dayname${j}`).textContent = weekdays[today + j];
        }
    }     */  
    let d = new Date;
    let today = d.getDay();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weatherLogo = "https://openweathermap.org/img/wn/";
    let j = 0;
    for (var i = 0; i < windcheck.length; i++) {
        var dt = windcheck[i].dt_txt;
        var time = dt.includes('18:00:00');
        if (time == true && j < 5){
            var temperature = windcheck[i].main.temp;
            document.getElementById(`hightemp${j +1}`).innerHTML = temperature;
            document.getElementById(`icon${j + 1}`).setAttribute("src",weatherLogo + windcheck[i].weather[0].icon + "@2x.png");
            document.getElementById(`icon${j + 1}`).setAttribute("alt",windcheck[i].weather[0].description);
            j++;
        }
        for(let j = 1; j < 6; j++){   
            document.getElementById(`dayname${j}`).textContent = weekdays[today + j];
            }
    }
    });



   