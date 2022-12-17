import axios from 'axios';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import './dish.css'

export default function Dish({dish}) {
  const [editable, setEditable] = useState(false)
  const dishName = useRef()
  const dishCategory = useRef()
  const dishPrice = useRef()

  function toggleEdit (e) {
    e.preventDefault();
    setEditable(!editable);
    console.log(editable)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setEditable(!editable);
    const res = await axios.put("http://localhost:5000/api/menu/",{
        id: dish._id,
        dishName: dishName.current.innerHTML,
        dishCategory: dishCategory.current.innerHTML,
        dishPrice: Number(dishPrice.current.innerHTML),
        dishStatus: dish.dishStatus,
    })
    console.log(res)  
};

  useEffect(()=>{

  },[editable])

  return (
    <div className="dish">
        {editable?<h1>edit</h1>:<></>}
        <div className="dishId">{dish._id}</div>
        <div className="dishName" contentEditable={editable} ref={dishName}>{dish.dishName}</div>
        <div className="dishCategory" contentEditable={editable} ref={dishCategory}>{dish.dishCategory}</div>
        <div className="dishPrice" contentEditable={editable} ref={dishPrice}>{dish.dishPrice}</div>
        <div className="dishStatus">{dish.dishStatus?"Active":"Inactive"}</div>
        <div className="itemButtons">
            <button className='itemEditButton' onClick={toggleEdit}>Edit</button>
            <button className='itemSaveButton' onClick={handleSave} disabled={!editable}>Save</button>
        </div>
    </div>
  )
}
