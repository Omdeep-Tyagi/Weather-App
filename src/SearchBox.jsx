import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'; 


export default function SearchBox({ updateInfo }){
    let [city,setCity]= useState(""); 
    let [error , setError] = useState(false);
   // console.log(import.meta.env);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async (evt)=>{
        try {
        evt.preventDefault();
        //console.log(city);
        let newInfo= await getWeatherInfo();
        setCity("");
        setError(false);
        updateInfo(newInfo);//when updateInfo(newInfo) is called, it triggers an update in the parent component's state (weatherInfo) with the new weather data.
        } catch (err){
            setError(true);
            updateInfo({
                city:"-",
                temp: "-",
                tempMin: "-",
                tempMax: "-",
                humidity: "-",
                feelsLike: "-",
                weather: "-",
    
            });
        }
    };

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let jsonResponse = await response.json();

        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        // console.log(result);
        return result;
    }catch(err){
        throw err;
    }}

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
        </>
    )

}