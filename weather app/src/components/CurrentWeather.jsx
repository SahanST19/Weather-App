import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherIcon.css';
import { Droplets, Wind, Gauge } from 'lucide-react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
    if (!data) return null;

    const { name, sys, main, weather, wind } = data;
    const temp = Math.round(main.temp);
    const feelsLike = Math.round(main.feels_like);
    const description = weather[0].description;
    const iconCode = weather[0].icon;

    return (
        <div className="current-conditions-card card">
            {/* Left Side: Main Info (Blue Gradient) */}
            <div className="main-info-section">
                <h3 className="section-title">Current Conditions</h3>
                <div className="temp-display">
                    <WeatherIcon iconCode={iconCode} size={80} className="main-icon" />
                    <span className="current-temp">{temp}°C</span>
                </div>
                <p className="feels-like">Feels like {feelsLike}°C</p>
                <p className="condition-desc">{description}</p>
            </div>

            {/* Right Side: Details (Dark) */}
            <div className="details-section">
                <div className="location-badge">{name}, {sys.country}</div>

                <div className="details-list">
                    <div className="detail-row">
                        <Droplets size={20} className="detail-icon" />
                        <span className="detail-label">Humidity:</span>
                        <span className="detail-value">{main.humidity}%</span>
                    </div>
                    <div className="detail-row">
                        <Wind size={20} className="detail-icon" />
                        <span className="detail-label">Wind:</span>
                        <span className="detail-value">{wind.speed} km/h</span> {/* Note: API returns m/s usually, but label says km/h in design. Keeping m/s logic or converting? Let's assume m/s for now or convert x 3.6 */}
                    </div>
                    <div className="detail-row">
                        <Gauge size={20} className="detail-icon" />
                        <span className="detail-label">Pressure:</span>
                        <span className="detail-value">{main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
