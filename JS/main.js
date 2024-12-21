let cityInput = document.getElementById('city-input');
let btn = document.getElementById('btn')
let apiKey = 'c078a2ab41ee4819950213758242012'

function getWeather(url){
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.querySelector('.today .location').innerHTML = data.location.name;
        document.querySelector('.today .day').innerHTML = new Date(data.forecast.forecastday[0].date).toLocaleDateString('en-US', { weekday: 'long' });
        document.querySelector('.today .date').innerHTML = new Date(data.forecast.forecastday[0].date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
        document.querySelector('.today .degree div').innerHTML = data.forecast.forecastday[0].day.avgtemp_c + "<sup>o</sup>C";
        document.querySelector(".today .clear").textContent = data.forecast.forecastday[0].day.condition.text;
        document.querySelector(".today .weather-icon-1 img").src = "https:" + data.forecast.forecastday[0].day.condition.icon;

        document.querySelector(".tomorrow .day").textContent = new Date(data.forecast.forecastday[1].date).toLocaleDateString('en-US', { weekday: 'long' });
        document.querySelector(".tomorrow .degree").innerHTML = data.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C";
        document.querySelector(".tomorrow p").innerHTML = data.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>C";
        document.querySelector(".tomorrow .clear").textContent = data.forecast.forecastday[1].day.condition.text;
        document.querySelector(".tomorrow .weather-icon img").src = "https:" + data.forecast.forecastday[1].day.condition.icon;

        document.querySelector(".day-3 .day").textContent = new Date(data.forecast.forecastday[2].date).toLocaleDateString('en-US', { weekday: 'long' });
        document.querySelector(".day-3 .degree").innerHTML = data.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>C";
        document.querySelector(".day-3 p").innerHTML = data.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>C";
        document.querySelector(".day-3 .clear").textContent = data.forecast.forecastday[2].day.condition.text;
        document.querySelector(".day-3 .weather-icon img").src = "https:" + data.forecast.forecastday[2].day.condition.icon;
    })
}

window.addEventListener('load', function () {
    let defultCity = 'Cairo';
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${defultCity}&days=3`;
    getWeather(url)
    
})

btn.addEventListener('click', function () {
    let cityName = document.getElementById('city-input').value;
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3`;
    getWeather(url)
    document.getElementById('city-input').value='';
})

cityInput.addEventListener('input', function () {
    let cityName = document.getElementById('city-input').value;
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3`;
    getWeather(url)
})
