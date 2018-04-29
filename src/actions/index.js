import axios from 'axios';
const API_KEY = '0e3f297c80938b3bc7ac22dcc1493e04';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}