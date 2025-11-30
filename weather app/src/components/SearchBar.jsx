import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onLocation }) => {
    const [city, setCity] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <div className={`search-pill ${isFocused ? 'focused' : ''}`}>
            <form onSubmit={handleSubmit} className="search-form-pill">
                <Search className="search-icon-pill" size={20} />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search city..."
                    className="search-input-pill"
                />
            </form>
            <div className="divider"></div>
            <button onClick={onLocation} className="location-button-pill" title="Use my location">
                <MapPin size={20} />
            </button>
        </div>
    );
};

export default SearchBar;
