const API_KEY = `6ed743089665424f03e03e6b8e462e04`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?' + name + '')"

const getweather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showweather(data)
}

const showweather = (data) => {
    if (data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found`
        return;
    }
    weather.innerHTML = ` <div>
<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image" >
</div>
<div>
 <h2>${data.main.temp}°C </h2>
 <h4>${data.weather[0].main}</h4>
 <h5>${data.main.humidity}%</h5>
</div>`
}

form.addEventListener(
    "submit",
    function (event) {
        getweather(search.value)
        event.preventDefault();

    }

)