apiKey = "a834cf7ed82fb052aad800e6a5068f43";
const citySearchInput = document.querySelector("serch-input");
const searchButton = document.getElementById("search-button");
const currentWeather = document.getElementById("weather-info");
const fiveDayForecast = document.getElementById("five-day-forecast");
const cityList = document.getElementById("search-history");
let city = null;
let recentArray = [];

firstLoad();
localStorageForRecent();

//event listener for search button
searchButton.addEventListener("click", handleSearch);
