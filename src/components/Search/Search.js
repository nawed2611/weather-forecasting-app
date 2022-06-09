import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Search = ({ city }) => {

  const WEATHER_URL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}`;
  const bgURL = `https://source.unsplash.com/random/900x700/?${city}`
  const [weather, setWeather] = useState([]);

  const fetchWeather = () => {
    axios
      .get(WEATHER_URL + '&q=' + city)
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
      {Object.keys(weather).length !== 0 && (
        <Card sx={{ minWidth: 1100, height: "80vh" }} >
          <CardActionArea>
            <CardMedia component="img"
              height="200"
              image={bgURL}
              alt="background-image" />

            <CardContent>
              <Typography gutterBottom variant="h4">Weather in {weather.location.name}, {weather.location.country}</Typography>
              <Typography variant="h2">{weather.current.temp_c}°C <img src={weather.current.condition.icon} /></Typography>
              <Typography variant="h4">{weather.current.condition.text}</Typography>
            </CardContent>

          </CardActionArea>
        </Card>
      )}
    </div>
  )
}

export default Search;