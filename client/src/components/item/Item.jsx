import axios from 'axios';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import './item.css'

export default function Item({item}) {
  const [editable, setEditable] = useState(false)
  const itemName = useRef()
  const itemCategory = useRef()
  const itemPoint = useRef()
  const itemQty = useRef()

  function toggleEdit (e) {
    e.preventDefault();
    setEditable(!editable);
    console.log(editable)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setEditable(!editable);
    const res = await axios.put("http://localhost:5000/api/inventory/",{
        id: item._id,
        itemName: itemName.current.innerHTML,
        itemCategory: itemCategory.current.innerHTML,
        itemStatus: item.itemStatus,
        itemPicture: "",
        itemPoint: Number(itemPoint.current.innerHTML),
        itemQty: Number(itemQty.current.innerHTML),
    })
    console.log(res)  
};

  useEffect(()=>{

  },[editable])

  return (
    <div className="item">
        {editable?<h1>edit</h1>:<></>}
        <div className="itemID">{item._id}</div>
        <div className="itemName" contentEditable={editable} ref={itemName}>{item.itemName}</div>
        <div className="itemCategory" contentEditable={editable} ref={itemCategory}>{item.itemCategory}</div>
        <div className="itemPoint" contentEditable={editable} ref={itemPoint}>{item.itemPoint}</div>
        <div className="itemStatus">{item.itemStatus?"Active":"Inactive"}</div>
        <div className="itemQty" contentEditable={editable} ref={itemQty}>{item.itemQty}</div>
        <div className="itemButtons">
            <button className='itemEditButton' onClick={toggleEdit}>Edit</button>
            <button className='itemSaveButton' onClick={handleSave} disabled={!editable}>Save</button>
        </div>
    </div>
  )
}
