import React from 'react';
import './WeatherBackground.css';

const WeatherBackground = ({ weatherCondition }) => {
    const getBackgroundClass = () => {
        if (!weatherCondition) return 'default-bg';

        const condition = weatherCondition.toLowerCase();

        if (condition.includes('rain') || condition.includes('drizzle')) return 'rainy-bg';
        if (condition.includes('cloud')) return 'cloudy-bg';
        if (condition.includes('clear') || condition.includes('sun')) return 'sunny-bg';
        if (condition.includes('snow')) return 'snowy-bg';
        if (condition.includes('thunder')) return 'thunder-bg';

        return 'default-bg';
    };

    return (
        <div className={`weather-background ${getBackgroundClass()}`}>
            {/* Rain Layers */}
            {(getBackgroundClass() === 'rainy-bg' || getBackgroundClass() === 'thunder-bg') && (
                <div className="rain-container">
                    <div className="rain-layer layer1"></div>
                    <div className="cloud cloud2"></div>
                </div>
            )}

            {/* Snow */}
            {getBackgroundClass() === 'snowy-bg' && (
                <div className="snow-container">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="snowflake"></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeatherBackground;
