import { useState,useEffect } from "react";
import axios from 'axios';
import Dish from "../../components/dish/Dish"
import "./menu.css"


export default function Menu() {
  const [menu,getMenu] = useState([]);
  
  useEffect(()=>{ 
    const fetchMenu = async () =>{
    const res = await axios.get("http://localhost:5000/api/menu/");
    getMenu(res.data);
    }
    fetchMenu();
  },[])
  return (
    <div className='menu'>
      <div className="menuLabels">
        <div className="dishId">DISH ID</div>
        <div className="dishName">NAME</div>
        <div className="dishCategory">CATEGORY</div>
        <div className="dishPrice">PRICE</div>
        <div className="dishStatus">STATUS</div>
      </div>
      {menu.map((i)=>(
        <Dish dish={i}/>
      ))}
    </div>
  )
}
