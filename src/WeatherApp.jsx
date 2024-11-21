import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo ]= useState({
            city:"-",
            temp: "-",
            tempMin: "-",
            tempMax: "-",
            humidity: "-",
            feelsLike: "-",
            weather: "-",

    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }


    return (
        <div>
            <h2 className='heading'>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}