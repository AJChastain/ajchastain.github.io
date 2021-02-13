
function getChilled() {
    var temp = parsefloat(document.getElementById("temperature").innerHTML);
    var ws = parsefloat(document.getElementById("wind_speed").innerHTML);
    var chill = calcChill(temp, ws);
    chill = document.getElementById("wind_chill").innerHTML;
 } 

function calcChill(temp, ws) {
    if (temp <= 50 && ws > 3) {
        let chilled = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * temp) * Math.pow(ws, 0.16);
        return chilled;
    }
    else {
        chilled = "N/A";
        return chilled;
    }
}