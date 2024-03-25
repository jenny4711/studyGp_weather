import React ,{useState}from 'react';
import { Button } from 'react-bootstrap';
import './weatherBtn.css'
const WeatherBtn = ({setCities,cities,setCity,reset,addCity}) => {
const [area,setArea]=useState("")
const [open,setOpen]=useState(false)
const [press,setPress]=useState(false)
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



  return (
    <div className='WeatherBtn'>
      <div className='btns'>
    <Button className='btn' variant="warning" onClick={()=>reset()} >Current Location</Button>
   {cities && cities?.map((city)=>(
     <Button className='cityBtn' variant="warning" onClick={()=>setCity(city)}>{city}</Button>
     
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
