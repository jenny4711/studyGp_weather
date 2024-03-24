import React from 'react'

 const WeatherBox = ({weather}) => {

  return (
    <div className='weather_box'>
      <h1>{weather?.location.name === "Null"?"Loading...":weather?.location.name}</h1>
      <h2>{weather?.current.temp_f}C</h2>
      <h2>{weather?.current.condition.text}</h2>
    </div>
  )
}
export default WeatherBox