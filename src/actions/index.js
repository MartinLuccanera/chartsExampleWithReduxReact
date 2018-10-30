import axios from 'axios';

const API_KEY = '7bf782764fc1e67870da9f62cbba6ac0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

//We use a const to keep it consistent between actions creators and reducers.
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Actions are objects that always have a 'type'.
export function fetchWeather(city) {
    //We can search through the documentation and list all of them in a dropdown, pass em as arguments, etc.
    const url = `${ROOT_URL}&q=${city},us`;
    //axios returns a promise (or request)
    const request = axios.get(url);

     return {
         type: FETCH_WEATHER,
         payload: request
     };
}