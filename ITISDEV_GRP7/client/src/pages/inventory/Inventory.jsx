import { useState,useEffect } from "react";
import axios from 'axios';
import Item from "../../components/item/Item"
import "./inventory.css"


export default function Inventory() {
  const [invent,getInvent] = useState([]);
  
  useEffect(()=>{ 
    const fetchInvent = async () =>{
    const res = await axios.get("http://localhost:5000/api/inventory/");
    getInvent(res.data);
    }
    fetchInvent();
  },[])
  return (
    <div className='inventory'>
      {invent.map((i)=>(
        <Item item={i}/>
      ))}
    </div>
  )
}
