import  Weather  from "./Weather.js";
import Ui from "./Ui.js";

const ui = new Ui();
const weather = new Weather("London","uk");

async function fetchWeather()
{
    const data = await weather.getWeather();
    ui.render(data);
}

document.getElementById("w-change-btn").addEventListener('click',(event)=>{
    event.preventDefault();
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city,countryCode);
    fetchWeather();  //veulvo a pedir los datos con nuevos valores
    clearForm();
    
});

function clearForm(){
    document.getElementById('city').value = "";
    document.getElementById('countryCode').value = "";
}


document.addEventListener('DOMContentLoaded',fetchWeather);  //seteo la data cuando arranca la app