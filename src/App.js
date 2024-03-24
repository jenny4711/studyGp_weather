
import { useEffect, useState } from 'react';
import WeatherBtn from './components/WeatherBtn';
import WeatherBox from './components/WeatherBox'
import ClipLoader from "react-spinners/ClipLoader";
import './App.css';

import { useWeatherQuery ,useWatherByLocationQuery} from './hooks/useWeatherQuery';
function App() {
 

  const [city,setCity]=useState("")
  const [lon,setLon]=useState(null)
  const [lat,setLat]=useState(null)

  const [weather,setWeather]=useState(null)

  const [cities,setCities]=useState(['Seoul','Paris','New Port'])
  const {data,isLoading,isError,error}=useWeatherQuery(city);
  const {data:dataByLocation,isError:isErrorByLocation,error:errorByLocation,isLoading:isLoadingByLocation}=useWatherByLocationQuery(lat,lon)
  
  const addCity = (newCity) => {
    if (!cities.includes(newCity)) {
      setCities([...cities, newCity]); 
    }
  };
  const reset=(city)=>{
    if(!city){
     setCity('')
     
     
    }else{
     setCity(city)
    }
   }
   useEffect(() => {
    getCurrentLocation();
  }, []); 
  const getCurrentLocation=()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    let lat= position.coords.latitude
    let lon=position.coords.longitude;
    setLat(lat)
    setLon(lon)
     setWeather(dataByLocation)
   });
  }
 
 useEffect(()=>{
  if(city === ""){
    
   setWeather(dataByLocation)
  
  }else{
    setWeather(data)
  }
 },[city,data,dataByLocation])

//  if (isLoading || isLoadingByLocation || weather === null) {
//   const 
//   return<div className='loading'><ClipLoader color='#f88c6b' loading={true} size={150} /></div> ;
// }
  
  return (
    <div className="App">
      <div className='board'>
        {isLoading || isLoadingByLocation || weather ===null?<div className='loading'><ClipLoader color='#f88c6b' loading={true} size={50} /></div> :<div></div>}
     <WeatherBox weather={weather}/>
      <WeatherBtn setCities={setCities} cities={cities} setCity={setCity} reset={reset} addCity={addCity}/>
      </div>
    </div>
  );
}

export default App;
