import axios from 'axios'
import React, { useRef } from 'react'

export default function Add() {
    const dishName = useRef()
    const dishCategory = useRef()
    const dishPrice = useRef()
    const dishStatus = useRef()

    const handleDish = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/api/menu/",{
            dishName: dishName.current.value,
            dishCategory: dishCategory.current.value,
            dishStatus: dishStatus.current.value,
            dishPrice: Number(dishPrice.current.value),
        })
        console.log(res)  
    };
    
  return (
    <div className='add'>
        <form className="DishForm" onSubmit={handleDish}>
            <div className="fieldDiv">
                <label>Dish Name</label>
                <input type="text" className="inputbar" placeholder="Enter dish name..." ref={dishName}/>
            </div>
            <div className="fieldDiv">
                <label>Dish Category</label>
                <input type="text" className="inputbar" placeholder="Enter dish category..." ref={dishCategory}/>
            </div>
            <div className="fieldDiv">
                <label>Dish  Price</label>
                <input type="text" className="inputbar" placeholder="Enter dish price..." ref={dishPrice}/>
            </div>
            <div className="fieldDiv">
                <label>Dish Status</label>
                <select ref={dishStatus}>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select>
            </div>
            <button className="SubmitButton" type="submit">Submit</button>
        </form>
    </div>
  )
}
