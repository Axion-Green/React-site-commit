import React from 'react';
import Spinner from '../Spinner';
import '../../pages/Home/Home.css'
const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return  <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (
                            <div className="home-content-card">
                                <div className="card-conteudo">
                                    <div className="card-titles">
                                        <h3 className="card-title">{weather.name}</h3>
                                        <p className="card-date">{date}</p>
                                        <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                        <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                    </div>
                                    <div className="card-description">
                                        <div className="card-body">
                                            <h5 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                            <h5 className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                            <h5 className="card-text">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                            <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                            <h5 className="card-text">Velocidad del viento: {weather.wind.speed}m/s</h5>
                                        </div>

                                        <div className="card-row">
                                            <div className="col">
                                                <p>{forecastDate3}h</p>
                                                <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate6}h</p>
                                                <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>
                                            <div className="col">
                                                <p>{forecastDate9}h</p>
                                                <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                                <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                            </div>


                                        </div>


                                    </div>

                                </div>
                            </div>

                ):(
                    <h2 className="text-light">Sem dados insira a cidade.</h2>
                )
            }



        </div>

    );
}

export default Card;