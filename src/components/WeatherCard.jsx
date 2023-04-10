import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {

    console.log(weather);

    const [isCelsius, setIsCelsius] = useState(true)

    const handleTemperature = () => setIsCelsius(!isCelsius)

    function firstWordString(str) {

        const words = str.split(' ');

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(' ');
    }


    return (
        <div className='weatherApp'>
            <div className='weatherApp__container'>
                <header className="weatherApp__header">
                    <div className='weatherApp__header--img' >
                        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                    <div className='weatherApp__header--data'>
                        <h1>Weather App</h1>
                        <h3>{weather?.name}, {weather?.sys.country}</h3>
                        <h5 className='weatherApp__header-coord'>
                            <p>Longitud {weather?.coord.lon.toFixed()}°</p>
                            <p>Latitud {weather?.coord.lat.toFixed()}°</p>
                        </h5>
                    </div>
                </header>
                <div className='weatherApp__main'>
                    <div className='weatherApp__body'>
                        <h3>"{firstWordString(weather?.weather[0].description)}"</h3>
                        <ul className='weatherApp__body--data'>
                            <li>Wind Speed <span>{weather?.wind.speed}m/s</span></li>
                            <li>Clouds <span>{weather?.clouds.all}%</span></li>
                            <li>Pressure <span>{weather?.main.pressure}hPa</span></li>
                        </ul>
                    </div>
                    <footer className='weatherApp__footer'>
                        <h2>
                            {
                                isCelsius
                                    ? `${temperature?.celsius} °C`
                                    : `${temperature?.farenheit} °F`
                            }
                        </h2>
                        <button className='weatherApp__footer--btn' onClick={handleTemperature}>Change to {isCelsius ? '°F' : '°C'}</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard