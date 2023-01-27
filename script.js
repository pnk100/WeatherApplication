const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ade2c13fdmsh7a4610ba5b5d290p15826ajsn454b5874a518",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

// For table like data as per given in bottom of pages


const tableWeather=()=>{

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    sfeels_like.innerHTML = response.feels_like;
    shumidity.innerHTML = response.humidity;
    smax_temp.innerHTML = response.max_temp;
    smin_temp.innerHTML = response.min_temp;
    ssunrise.innerHTML = response.sunrise;
    ssunset.innerHTML = response.sunset;
    stemp.innerHTML = response.temp;
    swind_degrees.innerHTML = response.wind_degrees;
    swind_speed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
 
  // Kolkata
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    kfeels_like.innerHTML = response.feels_like;
    khumidity.innerHTML = response.humidity;
    kmax_temp.innerHTML = response.max_temp;
    kmin_temp.innerHTML = response.min_temp;
    ksunrise.innerHTML = response.sunrise;
    ksunset.innerHTML = response.sunset;
    ktemp.innerHTML = response.temp;
    kwind_degrees.innerHTML = response.wind_degrees;
    kwind_speed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
}

tableWeather();
