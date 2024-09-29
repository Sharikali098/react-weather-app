import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const apiKey = "d3289c0da5f88f45a32d2e40b26cdff9" //?units=metric&q=
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    let getWeatherInfo = async () => {
        try{
            let response= await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                humidity:jsonResponse.main.humidity,
                pressure:jsonResponse.main.pressure,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
      
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo=  await getWeatherInfo();
           updateInfo(newInfo);
        }catch(err){
        
            setError(true);
        }

    };


    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />
                <Button variant="contained" type='Submit'>Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>};
            </form>
        </div>
    );
}