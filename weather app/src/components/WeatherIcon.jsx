import React from 'react';
import {
    Sun,
    Moon,
    CloudSun,
    Cloud,
    CloudRain,
    CloudDrizzle,
    CloudLightning,
    CloudSnow,
    CloudFog
} from 'lucide-react';

const WeatherIcon = ({ iconCode, size = 48, className = "" }) => {
    // Use 3D icons from a reliable GitHub CDN
    const iconUrl = `https://raw.githubusercontent.com/yuvraaaj/openweathermap-3d-icons/master/icons/${iconCode}.png`;

    return (
        <img
            src={iconUrl}
            alt="weather icon"
            width={size}
            height={size}
            className={`weather-icon-3d ${className}`}
            onError={(e) => {
                e.target.style.display = 'none';
                // Fallback logic could go here, but for now we'll just hide broken images
                // In a real app, we'd show a Lucide icon as fallback
            }}
        />
    );
};

export default WeatherIcon;
