import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './WeatherMap.css';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to update map center when coordinates change
const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
};

const WeatherMap = ({ lat, lon, city }) => {
    if (!lat || !lon) return null;

    const position = [lat, lon];
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    return (
        <div className="weather-map-card card">
            <h3 className="map-title">Real-time Weather Map</h3>
            <div className="map-container">
                <MapContainer center={position} zoom={10} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <ChangeView center={position} />

                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="Dark Matter">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />
                        </LayersControl.BaseLayer>

                        <LayersControl.BaseLayer name="Satellite">
                            <TileLayer
                                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            />
                        </LayersControl.BaseLayer>

                        <LayersControl.Overlay name="Clouds">
                            <TileLayer
                                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                                url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            />
                        </LayersControl.Overlay>

                        <LayersControl.Overlay checked name="Precipitation">
                            <TileLayer
                                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                                url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            />
                        </LayersControl.Overlay>

                        <LayersControl.Overlay name="Temperature">
                            <TileLayer
                                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            />
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="Wind">
                            <TileLayer
                                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                                url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            />
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name="Pressure">
                            <TileLayer
                                attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                                url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                            />
                        </LayersControl.Overlay>
                    </LayersControl>

                    <Marker position={position}>
                        <Popup>
                            {city}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default WeatherMap;
