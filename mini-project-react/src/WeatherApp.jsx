import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feels_like:24.84,
        temp:25.05,
        humidity:47,
        pressure:56,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Sharik</h2>
            <SearchBox updateInfo={updateInfo}/>   
            <InfoBox info={weatherInfo}/> 
            </div>
    )
}