// Fetch and display users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    let output = "<h3>User List</h3><ul>";
    users.forEach(user => {
      output += `<li>${user.name} (${user.email})</li>`;
    });
    output += "</ul>";
    
    // append result to #userList container (make sure this exists in HTML)
    document.getElementById("userList").innerHTML = output;
  });

// Weather Info Fetcher
console.log("===Weather Info Fetcher===");

const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>Temp: ${data.current_weather.temperature}°C</p>
          <p>Wind: ${data.current_weather.windspeed} km/h</p>
          <p>Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "No data available";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "Error fetching weather data";
    });
});



