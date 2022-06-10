import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import HourlyForecast from './HourlyForecast';


const Search = ({ city, date }) => {

  const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}`;
  const bgURL = `https://source.unsplash.com/random/900x700/?${city}`
  const [weather, setWeather] = useState([]);
  const nowDate = new Date();
  const days = parseInt(date.split("-")[2]) - nowDate.getDate() +1;


  const fetchWeather = () => {
    axios
      .get(WEATHER_URL + '&q=' + city + '&days=' + days)
      .then(response => {
        setWeather(response.data)
        console.log(weather);
      })
      .catch(error => {
        console.log({ error })
      })
  }

  useEffect(() => {

    fetchWeather();
  }, [city])

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {Object.keys(weather).length !== 0 && !date  && (
        <Card sx={{ maxWidth: 900, minHeight: "80vh" }} >
          <CardActionArea>
            <CardMedia component="img"
              height="200"
              image={bgURL}
              alt="background-image" />

            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h4">Weather in {weather.location.name}, {weather.location.country}</Typography>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Typography variant="h2">{weather.current.temp_c}°C</Typography>
                <Typography variant="h4"><img src={weather.current.condition.icon} /> {weather.current.condition.text}</Typography>
              </div>
              <div style={{ margin: "2rem" }}>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Feels like {weather.current.feelslike_c}°C</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Wind Speed - {weather.current.wind_kph}</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Pressure - {weather.current.pressure_mb}</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Humidity - {weather.current.humidity}</Typography>
              </div>
            </CardContent>

          </CardActionArea>

          <Card style={{ padding: "1rem" }}>
          <Typography variant="h4">Todays Forecast - {weather.forecast.forecastday[0].date}</Typography>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <List style={{listStyle: "none"}}>
                  <ListItemText>Max Temp {weather.forecast.forecastday[0].day.maxtemp_c}</ListItemText>
                  <ListItemText>Min Temp {weather.forecast.forecastday[0].day.mintemp_c}</ListItemText>
                  <ListItemText>Average Humidity {weather.forecast.forecastday[0].day.avghumidity}</ListItemText>
                  <ListItemText>Chances of Rain {weather.forecast.forecastday[0].day.daily_chance_of_rain}</ListItemText>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          <Typography style={{ margin :"1rem"}} variant="h4">Hourly Forecast for {weather.location.name}</Typography>
          <HourlyForecast weather={weather} />

        </Card>
      )
      }
      { Object.keys(weather).length !== 0 && date  && (
          <Card sx={{ minWidth: 900, minHeight: "80vh" }} >
            <CardMedia component="img"
              height="200"
              image={bgURL}
              alt="background-image" />
              <CardActionArea>

            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h4">Weather in {weather.location.name}, {weather.location.country}</Typography>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Typography variant="h2">{weather.current.temp_c}°C</Typography>
                <Typography variant="h4"><img src={weather.current.condition.icon} /> {weather.current.condition.text}</Typography>
              </div>
              <div style={{ margin: "2rem" }}>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Feels like {weather.current.feelslike_c}°C</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Wind Speed - {weather.current.wind_kph}</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Pressure - {weather.current.pressure_mb}</Typography>
                <Typography style={{ margin: "0.2rem" }} variant="subtitle1">Humidity - {weather.current.humidity}</Typography>
              </div>
            </CardContent>
          </CardActionArea>

          <Card style={{ padding: "1rem" }}>
          <Typography variant="h4">Forecast For - {date}</Typography>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <List style={{listStyle: "none"}}>
                  <ListItemText>Max Temp : {weather.forecast.forecastday[weather.forecast.forecastday.length-1].day.maxtemp_c}</ListItemText>
                  <ListItemText>Min Temp : {weather.forecast.forecastday[weather.forecast.forecastday.length-1].day.mintemp_c}</ListItemText>
                  <ListItemText>Average Humidity : {weather.forecast.forecastday[weather.forecast.forecastday.length-1].day.avghumidity}</ListItemText>
                  <ListItemText>Chances of Rain : {weather.forecast.forecastday[weather.forecast.forecastday.length-1].day.daily_chance_of_rain}</ListItemText>
                </List>
              </CardContent>
            </CardActionArea>
          </Card>
          </Card>
      ) }
    </div>
  )
}

export default Search;