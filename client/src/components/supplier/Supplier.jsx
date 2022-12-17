import axios from 'axios';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import './supplier.css'

export default function Supplier({supp}) {
  const [editable, setEditable] = useState(false)
  const suppName = useRef()
  const suppAddress = useRef()
  const suppContact = useRef()
  const suppOwner = useRef()
  const suppUrl = useRef()

  function toggleEdit (e) {
    e.preventDefault();
    setEditable(!editable);
    console.log(editable)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setEditable(!editable);
    const res = await axios.put("http://localhost:5000/api/supplier/",{
        id: supp._id,
        suppName: suppName.current.innerHTML,
        suppAddress: suppAddress.current.innerHTML,
        suppContact: suppContact.current.innerHTML,
        suppOwner: suppOwner.current.innerHTML,
        suppUrl: suppUrl.current.innerHTML,
    })
    console.log(res)  
};

  useEffect(()=>{

  },[editable])

  return (
    <div className="supplier">
      {editable?<h1>edit</h1>:<></>}
        <div className="suppLeft" contentEditable={editable} ref={suppName}>{supp.suppName}</div>
        <div className="suppCenter" contentEditable={editable} ref={suppAddress}>{supp.suppAddress}</div>
        <div className="suppRight">
            <div className='suppInfo'>
                <div className='suppContact' contentEditable={editable} ref={suppContact}>{supp.suppContact}</div>
                <div className='suppName' contentEditable={editable} ref={suppOwner}>{supp.suppOwner}</div>
                <div className='suppURL' contentEditable={editable} ref={suppUrl}>{supp.suppUrl}</div>
            </div>
            <div className="suppButtons">
              <button className='suppButton' onClick={toggleEdit}>Edit</button>
              <button className='itemSaveButton' onClick={handleSave} disabled={!editable}>Save</button>
           </div>
        </div>
    </div>
  )
}
