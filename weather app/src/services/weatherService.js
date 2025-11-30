const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const fetchFromApi = async (endpoint, params) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set VITE_OPENWEATHER_API_KEY in .env file.");
  }

  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.search = new URLSearchParams({
    ...params,
    appid: API_KEY,
    units: "metric", // Default to Celsius
  });

  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to fetch weather data");
  }
  return response.json();
};

export const getCurrentWeather = async (city) => {
  return fetchFromApi("weather", { q: city });
};

export const getForecast = async (city) => {
  return fetchFromApi("forecast", { q: city });
};

export const getCurrentWeatherByCoords = async (lat, lon) => {
  return fetchFromApi("weather", { lat, lon });
};

export const getForecastByCoords = async (lat, lon) => {
  return fetchFromApi("forecast", { lat, lon });
};

export const formatTime = (timestamp, timezoneOffset) => {
    // timestamp is in seconds, timezoneOffset is in seconds
    const date = new Date((timestamp + timezoneOffset) * 1000);
    // We need to adjust for the user's local time vs the city's local time if we want to show "local time"
    // But usually simple formatting is enough.
    // Let's return a simple formatted string.
    // Note: This simple approach might be off by the user's local offset.
    // Better to just use UTC and add offset.
    const localTime = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
