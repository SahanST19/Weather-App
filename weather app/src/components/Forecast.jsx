import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherIcon.css';
import './Forecast.css';

const Forecast = ({ data }) => {
    if (!data) return null;

    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    const forecastItems = dailyForecast.length >= 4
        ? dailyForecast
        : data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

    const getDayName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const getDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    };

    return (
        <div className="forecast-card card">
            <h3 className="forecast-title">5-Day Outlook</h3>
            <div className="forecast-list">
                <div className="forecast-header-row">
                    <span>Day</span>
                    <span>Condition</span>
                    <span>Temp</span>
                </div>

                {forecastItems.map((item) => (
                    <div key={item.dt} className="forecast-row">
                        <div className="day-col">
                            <span className="day-name">{getDayName(item.dt_txt)}</span>
                            <span className="date-text">{getDate(item.dt_txt)}</span>
                        </div>

                        <div className="condition-col">
                            <WeatherIcon iconCode={item.weather[0].icon} size={30} />
                            <span className="condition-text-sm">{item.weather[0].main}</span>
                        </div>

                        <div className="temp-col">
                            <span className="max-temp">{Math.round(item.main.temp_max)}°</span>
                            <span className="min-temp">{Math.round(item.main.temp_min)}°</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
