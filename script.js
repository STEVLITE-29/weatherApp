// Get references to DOM elements
const btn = document.getElementById("getWeather");
const output = document.getElementById("weather-info");
const getCity = document.getElementById("city");

// Add a click event listener to the "Get Weather" button
btn.addEventListener("click", async () => {
    // Read and trim the value from the input field
    const city = getCity.value.trim();

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3dec8e82fc24a9a28b3081317ccc680&units=metric`,
            {
                method: "GET",
            }
        );

        // Parse the JSON response
        const data = await response.json();
        console.log(data); // Debug: log the response

        // Handle city not found or invalid response
        if (data.cod == 404) {
            output.textContent = data.message; // e.g. "city not found"
            return;
        }

        // Display weather info in the output container
        output.innerHTML = `
            <h1>${data.name}</h1>
            <h3>${data.main.temp}°C</h3>
            <h3>${data.weather[0].description}</h3>
        `;
    } catch (error) {
        // Handle network or unexpected errors
        output.textContent = `Error: ${error.message}`;
    }
});
