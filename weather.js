const getBtn = document.querySelector("#getBtn");
const API_KEY = "017cf0a9988381b26e4ec2336c46fc90";
const weatherDataContainer = document.querySelector("#weatherData");
weatherDataContainer.textContent = "";

const getWeatherReportData = async (city_name)=>{
    //lets connect with API
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

getBtn.addEventListener("click", async ()=>{

    weatherDataContainer.textContent = "";

    const cityName = document.querySelector("#city_name").value;

    if (typeof cityName === "string" && cityName.trim() !== "") {
        try {
            const weatherData = await getWeatherReportData(cityName);

            if(weatherData.cod === "404"){
                appendInfo("Error", weatherData.message);
                return true;
            }
    
            // Clear previous content
            weatherDataContainer.innerHTML = '';

            let feels_like = Math.round(parseInt(weatherData.main.feels_like));
    
            appendInfo("City Name", weatherData.name);
            appendInfo("Feels Like", `${feels_like} \u00B0 celcius`);
            appendInfo("Current Temperature", weatherData.main.temp);
            appendInfo("Type", weatherData.weather[0].description);
        } catch (error) {
            console.log(error);
            alert("Error fetching weather data. Please try again.");
        }
    } else {
        alert("Please enter a proper city name");
    }
});

function appendInfo(title, value) {
    const div = document.createElement("div");
    const titleSpan = document.createElement("span");
    const valueSpan = document.createElement("span");

    div.setAttribute("class", "border");
    titleSpan.setAttribute("class", "title");
    valueSpan.setAttribute("class", "value");

    titleSpan.textContent = title + ": ";
    valueSpan.textContent = value;

    div.appendChild(titleSpan);
    div.appendChild(valueSpan);

    weatherDataContainer.append(div);
}

