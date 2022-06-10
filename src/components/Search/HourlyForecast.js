import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const HourlyForecast = (props) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {
                props.weather && props.weather.forecast.forecastday[0].hour.map(({ time, temp_c, condition, humidity, feelslike_c }) => (
                    <Card style={{ margin: "1rem", padding: "1rem" }} >
                        <CardActionArea>
                            <Avatar src={condition.icon} />
                            <CardContent>
                                <Typography variant="subtitle2">{condition.text}</Typography>
                                <Typography variant="subtitle2">Hours From Now - {time.split(" ")[1]}</Typography>
                                <Typography variant="subtitle2">Temperature - {temp_c}</Typography>
                                <Typography variant="subtitle2">Humidity - {humidity}</Typography>
                                <Typography variant="subtitle2">Feels like - {feelslike_c}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div>
    )
}

export default HourlyForecast