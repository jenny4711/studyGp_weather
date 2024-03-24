import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


let apiKey=process.env.REACT_APP_WEATHER_apiKey

const getWeatherByName=async(city)=>{
  console.log(process.env)
  return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
}

const getWeatherByLocation=async(lat,lon)=>{
return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`)
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