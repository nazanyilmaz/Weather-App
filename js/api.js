const API_KEY = "7f62c3d152e9ef573bbf20a0e300b0e0";



//fonsiyon sehir ve birim bilgilerini parametre olarak lair
async function fetchWeatherData(city, units) {
    try {
       const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
       );
       //console.log(response.json());
       //istek basarili degilse hata firlatir
       if(!response.ok) {
        throw new Error("HTTP error");
       }
       //json formatina donustur ve geri dondur
        return response.json();
    }catch(error){
        console.log(error);

    }

}
//fonsiyonun diger dosyalarda kullanilabilir hale getirir
export default fetchWeatherData;