import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";

//html elemanlarini cekme
 const selectors = {
    city: document.querySelector(".weather-city"),
    datetime: document.querySelector(".weather-datetime"),
    weatherForecast: document.querySelector(".weather-forecast"),
    weatherTemperature: document.querySelector(".weather-temperature"),
    weatherIcon: document.querySelector(".weather-icon"),
    weatherMinMax: document.querySelector(".weather-minmax"),
    weatherRealfeel: document.querySelector(".weather-realfeel"),
    weatherHumidity: document.querySelector(".weather-humidity"),
    weatherWind: document.querySelector(".weather-wind"),
    weatherPressure: document.querySelector(".weather-pressure"),
    searchForm: document.querySelector(".weather-search"),
    searchInput: document.querySelector(".weather-searchform"),
    unitCelsius: document.querySelector(".weather-units-celsius"),
    unitFahrenheit: document.querySelector(".weather-units-fahrenheit"),
    maxTemp: document.getElementById("maxTemp"),

};
//varsayilan degerler
let currCity = "New York";
let units = "metric";
//hava durumu verilerini apiden aldik ve UIyi guncelledik
export async function getWeather (){
   const data = await fetchWeatherData(currCity, units);
   updateUI(data, selectors);
}
selectors.searchForm.addEventListener("submit", async (e) =>{
    e.preventDefault ();


currCity = selectors.searchInput.value;
//console.log(currCity);

    selectors.searchInput.value ="";

   await getWeather();
    
});

    


selectors.unitCelsius.addEventListener("click", () => {
    if(units !=="metric") {
        units = "metric";
        getWeather();
    }

});

selectors.unitFahrenheit.addEventListener("click", () =>{
    if(units !== "imperial"){
        units = "imperial";
        getWeather();
    }

});
document.body.addEventListener("load", async () => {
    await getWeather();  //yuklenince ilk once hava durumunu cekiyoruz

});

