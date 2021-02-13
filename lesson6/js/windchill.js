function getChilled() {
    var temp = parseFloat(document.getElementById("temperature").value);
    var ws = parseFloat(document.getElementById("wind_speed").value);
    var chill = calcChill(temp, ws);
    document.getElementById("wind_chill").innerHTML = chill;
   
 } 

function calcChill(temp, ws) {
    if (temp < 51 && ws > 3) {
        var chilled = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * temp) * Math.pow(ws, 0.16);
        return chilled;
    }
    else {
        chilled = "(N/A)";
        return chilled;
    }
}

