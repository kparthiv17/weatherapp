document.querySelector(".search-btn").addEventListener("click", () => {
  const city = document.querySelector(".city-input").value.toLowerCase();
  fetch("weather.json")
    .then((response) => response.json())
    .then((data) => {
      const cityData = data.cities.find((c) => c.name.toLowerCase() === city);
      if (cityData) {
        displayWeather(cityData);
      } else {
        alert("City not found!");
      }
    });
});

function displayWeather(city) {
  document.querySelector(".section-message").style.display = "none";
  document.querySelector(".weather-info").style.display = "block";

  document.querySelector(".country-txt").textContent = city.name;
  document.querySelector(".current-date-txt").textContent = city.date;
  document.querySelector(".temp-txt").textContent = city.temp;
  document.querySelector(".condition-txt").textContent = city.condition;
  document.querySelector(".weather-summary-icon").src = city.icon;
  document.querySelector(".humidity-value-txt").textContent = city.humidity;
  document.querySelector(".wind-value-txt").textContent = city.wind;

  const forecastContainer = document.querySelector(".forecast-items-container");
  forecastContainer.innerHTML = "";
  city.forecast.forEach((f) => {
    forecastContainer.innerHTML += `
            <div class="forcast-item">
                <h5 class="forcast-item-date">${f.date}</h5>
                <img src="${f.icon}" class="forcast-item-img">
                <h5 class="forcast-item-temp">${f.temp}</h5>
            </div>`;
  });
}
