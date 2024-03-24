import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


let apiKey=process.env.REACT_APP_WEATHER_apiKey
let openWeather_ApiKey=process.env.REACT_APP_OPEN_WEATHER_apiKey

const getWeatherByName=async(city)=>{
 return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeather_ApiKey}&units=metric`)
  // return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
}

const getWeatherByLocation=async(lat,lon)=>{
  console.log(openWeather_ApiKey)
  return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeather_ApiKey}&units=metric`)
// return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`)
}
export const useWeatherQuery=(city)=>{
  
  return useQuery({
    queryKey:['results',city],
    queryFn:()=>getWeatherByName(city),
    retry:1,
    select:(data)=>{
      return data.data;
    }
  })
}

export const useWatherByLocationQuery=(lat,lon)=>{
  return useQuery({
    queryKey:['byLocation',lat,lon],
    queryFn:()=>getWeatherByLocation(lat,lon),
    retry:1,
    
    select:(data)=>{
      return data.data;
    }
  })
}