import React from "react";
import "./Weather.css";

export default function Weather(){
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




<h1>Johannesburg</h1>
<ul>
<li>Monday 15:00</li>
<li>Partly cloudy</li>

</ul>
<div className="row mt-3">
<div className="col-6">
<div className="clearfix" >  
<img src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/partly_cloudy_light.svg" alt="Partly cloudy" width="60px" className="float-left"/>

<span className="temperature">25</span> <span className="unit">°C</span>

</div>
</div>

<div className="col-6">
<ul>
    <li>Precipitation : 0%</li>
    <li>Humidity : 19%</li>
    <li>Wind : 14k/m</li>
</ul>

</div>




</div>




</div>


)









}