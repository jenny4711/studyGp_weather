import React ,{useState}from 'react';
import { Button } from 'react-bootstrap';
import './weatherBtn.css'
const WeatherBtn = ({press,setPress,setCities,cities,setCity,reset,addCity}) => {
const [area,setArea]=useState("")
const [open,setOpen]=useState(false)
const [pressedCity,setPressedCity]=useState("")
const showInput=()=>{
  setOpen(!open)
}
const addBtn=(evt)=>{
  evt.preventDefault();
  setArea(evt.target.value)
}

const handleSubmit = () => {
  addCity(area); 
  setArea(""); 
  setOpen(false); 
};

const handleCityBtn=(city)=>{
  setPress(false)
setCity(city)
setPressedCity(city)

}

  return (
    <div className='WeatherBtn'>
      <div className='btns'>
    <Button className={`btn ${press?'active':''}`} variant="warning" onClick={()=>reset()} >Current Location</Button>
   {cities && cities?.map((city)=>(
     <Button className={`cityBtn ${pressedCity === city?'active':""}`} variant="warning" onClick={()=>handleCityBtn(city)}>{city}</Button>
     
   ))}
   
   <Button onClick={()=>showInput()}>{!open?"Add City":"Hide Form"}</Button>
   </div>
   <div className={open?"input":'none'}>
   <input onChange={addBtn}  type='text' value={area}/>
   <Button onClick={handleSubmit}>Submit</Button> 
   </div>
  </div>
  );
}

export default WeatherBtn;
