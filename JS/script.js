const searchbox = document.querySelector(".search-box");
const searchbutton = document.querySelector(".search-btn");
const api = {
    baseurl:"https://api.openweathermap.org/data/2.5",
    key :"b66a9e55f3d28e0051569e61563930c3"
}
searchbutton.addEventListener("click", getResults);
function getResults() {
    fetch(
        // fetching the results from given url
        `${api.baseurl}/weather?q=${searchbox.value}&units=metric&appid=${api.key}`
      )
        .then((weather) => weather.json()) //converting the result into json
        .then(displayresults)
        .catch((error) => { //handing the error when wrong city entered
          console.log(error);
          let city = document.querySelector(".location .city");
          city.innerText = "wrong city entered";
        });
    }
    function displayresults(weather) {
        console.log(weather);
        let city = document.querySelector(".location .city");
        city.innerText = `${weather.name},${weather.sys.country}`;
    
      
      
        let temp = document.querySelector(".current .temp");
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
      
        let weather_name = document.querySelector(".current .weather");
        weather_name.innerText = `${weather.weather[0].main}`;
      
        let hi_low = document.querySelector(".current .hi-low");
        hi_low.innerText = `${weather.main.temp_min}°C/${weather.main.temp_max}°C`;
      }