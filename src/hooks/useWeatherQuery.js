import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
let apiKey='64b41e2dad76414488905658242403'
const getWeatherByName=async(city)=>{
 
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