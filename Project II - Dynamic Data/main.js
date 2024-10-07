import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min";

const container = document.getElementById('container');
const dynamicDataDiv = document.querySelector('.dynamic_data');
const spinnerContainer = document.querySelector('.spinner-container');
const noResultsAlert = document.querySelector('.alert');

const fetchData = async (city) => {
    // First, fetch latitude and longitude for the city
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    spinnerContainer.classList.remove('d-none');
    noResultsAlert.classList.add('d-none');
    dynamicDataDiv.innerHTML = '';

    try {
        const geocodingResponse = await fetch(geocodingUrl);
        const geocodingData = await geocodingResponse.json();

        if (!geocodingResponse.ok || geocodingData.results.length === 0) {
            noResultsAlert.classList.remove('d-none');
            spinnerContainer.classList.add('d-none');
            return;
        }

        const { latitude, longitude } = geocodingData.results[0];

        // Fetch weather data using the latitude and longitude
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        spinnerContainer.classList.add('d-none');

        if (!weatherResponse.ok) {
            container.textContent = "Failed to retrieve weather data.";
            return;
        }

        handleWeatherData(weatherData);
    } catch (error) {
        console.error('Fetch Error:', error);
        container.textContent = "An error occurred while fetching weather data.";
    }
};

function handleWeatherData(data) {
    const weather = data.current_weather;
    const weatherCard = `
        <div class="col">
            <article class="card">
                <div class="card-body">
                    <h5>Current Weather</h5>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                    <p>Weather: ${weather.weathercode}</p>
                </div>
            </article>
        </div>
    `;
    dynamicDataDiv.innerHTML = weatherCard;
}

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('searchInput').value;
    fetchData(city);
});
