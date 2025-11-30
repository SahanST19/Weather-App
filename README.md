# 🌦️ Professional Weather Dashboard

A modern, responsive weather application built with React and Vite. This dashboard provides real-time weather data, a 5-day forecast, and an interactive weather map visualization using Leaflet. It features a beautiful UI with glassmorphism effects and automatic location detection.

![Weather App Preview](https://via.placeholder.com/800x400?text=Weather+App+Preview) 
## ✨ Features

* **📍 Real-time Weather Data**: Get up-to-date temperature, humidity, wind speed, pressure, and "feels like" temperature for any city.
* **📅 5-Day Forecast**: Detailed 5-day weather outlook to plan your week ahead.
* **🗺️ Interactive Weather Map**: Built with **React Leaflet**, featuring multiple layers:
    * Dark Matter & Satellite Views
    * Precipitation, Clouds, Temperature, Wind, and Pressure overlays.
* **🌍 Geolocation Support**: Automatically detects your current location to show local weather conditions.
* **🔍 Smart Search**: Easily search for weather conditions in any city worldwide.
* **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

* **Frontend Library**: [React](https://react.dev/) (v19)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Maps**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
* **Icons**: [Lucide React](https://lucide.dev/) & 3D Weather Icons
* **API**: [OpenWeatherMap API](https://openweathermap.org/api)
* **Styling**: CSS3 (Flexbox, Grid, Glassmorphism)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your computer.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/SahanST19/weather-app.git](https://github.com/SahanST19/weather-app.git)
    cd weather-app
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure API Key**
    * Create a `.env` file in the root directory of the project.
    * Add your OpenWeatherMap API key as shown below:
    
    ```env
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```
    *(Note: You can get a free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up))*

4.  **Run the Application**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the link shown in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure
