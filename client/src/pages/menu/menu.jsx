import { useState,useEffect } from "react";
import axios from 'axios';
import Dish from "../../components/dish/Dish"
import SideBarMenu from "../../components/sidebar/SideBarMenu";
import "./menu.css"

export default function Menu() {
  const [menu,getMenu] = useState([]);
  const [order,getOrder] = useState([]);
  useEffect(()=>{ 
    const fetchMenu = async () =>{
    const res = await axios.get("http://localhost:5000/api/menu/");
    getMenu(res.data);
    }
    fetchMenu();
  },[])
  useEffect(()=>{ 
    const fetchInvent = async () =>{
    const res = await axios.get("http://localhost:5000/api/order/");
    console.log(res.data)
    getOrder(res.data);
    }
    fetchInvent();
  },[])
  return (
    <div className="menuContent">
      <SideBarMenu orders={order}/>
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
    </div>
  )
}
