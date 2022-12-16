import { useState,useEffect } from "react";
import axios from 'axios';
import Supplier from "../../components/supplier/Supplier"
import "./suppliers.css"

export default function Suppliers() {
  const [suppliers,getSuppliers] = useState([]);
  
  useEffect(()=>{ 
    const fetchSuppliers = async () =>{
    const res = await axios.get("http://localhost:5000/api/supplier/");
    getSuppliers(res.data);
    }
    fetchSuppliers();
  },[])

  return (
    <div className="suppliers">
      {suppliers.map((s)=>(
        <Supplier supp={s}/>
      ))}
    </div>
  )
}
