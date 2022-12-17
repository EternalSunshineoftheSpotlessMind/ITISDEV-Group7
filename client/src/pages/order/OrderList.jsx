import { useState,useEffect } from "react";
import axios from 'axios';
import "./orderList.css"
import Order from "../../components/order/Order";



export default function OrderList() {
  const [order,getOrder] = useState([]);
  
  useEffect(()=>{ 
    const fetchInvent = async () =>{
    const res = await axios.get("http://localhost:5000/api/order/");
    console.log(res.data)
    getOrder(res.data);
    }
    fetchInvent();
  },[])
  return (
    <div className='orderlist'>
      {/* labels insert here */}
      {order.map((i)=>(
        <Order order={i}/>
      ))}
    </div>
  )
}
