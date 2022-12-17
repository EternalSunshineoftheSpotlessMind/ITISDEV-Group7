import axios from "axios";
import { useEffect, useState } from "react";
import DashView from "../../components/dashView/DashView"
import SideBar from "../../components/sidebar/SideBar";
import "./dashboard.css"

export default function Dashboard() {
    const [invent,getInvent] = useState([]);
  useEffect(()=>{ 
    const fetchInvent = async () =>{
    const res = await axios.get("http://localhost:5000/api/inventory/");
    getInvent(res.data);
    }
    fetchInvent();
  },[])
  return (
    <div className="dashboard">
        <SideBar  invent={invent}/>
        <DashView invent={invent}/>
    </div>
  )
}
