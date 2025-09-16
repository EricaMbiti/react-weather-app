import React ,{useState}from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData,setWeatherData] =useState({ready:false})  ;
const[city, setCity]=useState(props.defaultCity);
function handleResponse(response){
console.log(response.data);

setWeatherData({


  ready: true,
      temperature: response.data.temperature,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      date: new Date(response.data.time * 1000)

    });
}

function search(){

const apiKey="5t2d0f5d9d5f13f50593407dab36oc25"
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);




}

function handleSubmit(event){

event.preventDefault();
search();



}

function handleCityChange(event){
setCity(event.target.value);



}


if(weatherData.ready){
return(
<div className="Weather">

<form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-9">
<input type="search" placeholder="Search city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
</div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary w-100"/>
</div>
</div>

</form>
<WeatherInfo data={weatherData}/>







</div>


);
}else{

 search();

return "Loading";

}




}