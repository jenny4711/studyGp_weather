import React from 'react'

 const WeatherBox = ({weather}) => {
let F = weather?.main.temp * 1.8 +32
let result = Math.floor(F)
console.log(result,'wheather')
  return (
    <div className='weather_box'>
      <h1>{weather?.name === "Null"?"Loading...":weather?.name}</h1>
      <h2>{weather?.main.temp}C / {result}C</h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  )
}
export default WeatherBox