const apiKey="4b039a7cfd0e9ed4312fd2c64da71f35";

const weatherData=document.getElementById("weather_data");


const cityInput=document.getElementById("city_input");

const form=document.querySelector("form");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue=cityInput.value;
    // console.log(cityValue)


    getWeatherData(cityValue)

})

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response was not OK")
        }

        const data=await response.json()

        // console.log(data)
        const temperature=Math.round(data.main.temp)

        const description=data.weather[0].description
        const icon=data.weather[0].icon
        const details=[
            `Feels like : ${Math.round(data.main.feels_like)}°`,
            `Humidity : ${data.main.humidity}%`,
            `Wind Speed : ${data.wind.speed} m/s`
        ]

        weatherData.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`

        weatherData.querySelector(".temperature").textContent=`${temperature}°`

        weatherData.querySelector(".description").textContent=`${description}`

        weatherData.querySelector(".details").innerHTML=details.map((detail)=>
            `<div>${detail}</div>`).join("")
        

    } catch (error) {
        weatherData.querySelector(".icon").innerHTML=""

        weatherData.querySelector(".temperature").textContent=""

        weatherData.querySelector(".description").textContent="Please enter valid city name or Try again later"

        weatherData.querySelector(".details").innerHTML=""
    }
}