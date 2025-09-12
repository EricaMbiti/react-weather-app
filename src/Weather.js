import React ,{useState}from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData,setWeatherData] =useState({ready:false})  ;
function handleResponse(response){
console.log(response.data);

setWeatherData({
ready:true,
temperature:response.data.main.temp,
date:"Wednesday 16:00",
humidity:response.data.main.humidity,
wind:response.data.wind.speed,
description:response.data.weather[0].description,
iconUrl:"https://www.gstatic.com/weather/conditions2023/2023.2/svg/partly_cloudy_light.svg",
city:response.data.name,

    });
}

if(weatherData.ready){
return(
<div className="Weather">

<form>
    <div className="row">
    <div className="col-9">
<input type="search" placeholder="Search city" className="form-control" autoFocus="on"/>
</div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary w-100"/>
</div>
</div>

</form>




<h1>{weatherData.city}</h1>
<ul>
<li>{weatherData.date}</li>
<li className="text-capitalize">{weatherData.description}</li>

</ul>
<div className="row mt-3">
<div className="col-6">
<div className="clearfix" >  
<img src={weatherData.iconUrl} alt={weatherData.description} width="60px" className="float-left"/>

<span className="temperature">{Math.round(weatherData.temperature)}</span>

 <span className="unit">°C</span>

</div>
</div>

<div className="col-6">
<ul>
   <li>Precipitation : 0%</li>
    <li>Humidity : {weatherData.humidity}</li>
    <li>Wind : {weatherData.wind}k/h</li>
</ul>

</div>




</div>




</div>


);
}else{

const apiKey = "667d9f573c8af4c33457be5d561a9148";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);  

return "Loading";

}




}