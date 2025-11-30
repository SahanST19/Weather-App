import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import WeatherMap from './components/WeatherMap';
import { getCurrentWeather, getForecast, getCurrentWeatherByCoords, getForecastByCoords } from './services/weatherService';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (fetchWeatherFn, fetchForecastFn, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherFn(...args),
        fetchForecastFn(...args)
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchData(getCurrentWeather, getForecast, city);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchData(getCurrentWeatherByCoords, getForecastByCoords, latitude, longitude);
        },
        (err) => {
          setError("Location access denied or unavailable.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Load default city on mount
  useEffect(() => {
    handleSearch("Colombo");
  }, []);

  return (
    <div className="app-container">
      <div className="main-layout">
        <header className="app-header">
          <SearchBar onSearch={handleSearch} onLocation={handleLocation} />
        </header>

        <h2 className="dashboard-title">Professional Weather Dashboard</h2>

        {loading && <div className="loading-state">Loading data...</div>}
        {error && <div className="error-message">{error}</div>}

        {!loading && !error && weather && (
          <div className="dashboard-grid">
            <CurrentWeather data={weather} />
            <WeatherMap lat={weather.coord.lat} lon={weather.coord.lon} city={weather.name} />
            <Forecast data={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
