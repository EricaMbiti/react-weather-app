import React,{useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
const[loaded,setLoaded]=useState(false);
const[forecast,setForecast]=useState(null);
function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
}
    if(loaded){
        console.log(forecast);


return (
<div className="WeatherForecast">
<div className="row">
<div className="col">
<div className="WeatherForecast-day">Fri</div>
<WeatherIcon code="mist-day" size={32}/>
<div className="WeatherForecast-temperatures">
<span className="WeatherForecast-max">{Math.round(forecast[0].temperature.maximum)}°</span>
<span className="WeatherForecast-min">12°</span>


</div>


</div>
</div>
</div>
);}

else{
let apiKey="5t2d0f5d9d5f13f50593407dab36oc25"
let city=props.city;

let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);


return null;
}
}