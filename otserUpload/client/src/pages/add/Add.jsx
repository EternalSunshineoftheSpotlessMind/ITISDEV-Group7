import axios from 'axios'
import React, { useRef } from 'react'

export default function Add() {
    const itemName = useRef()
    const itemCategory = useRef()
    const itemQty = useRef()
    const itemPoint = useRef()
    const itemStatus = useRef()

    const suppName = useRef()
    const suppAddress = useRef()
    const suppContact = useRef()
    const suppOwner = useRef()
    const suppUrl = useRef()


    const handleItem = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/api/inventory/",{
            itemName: itemName.current.value,
            itemCategory: itemCategory.current.value,
            itemStatus: itemStatus.current.value,
            itemPicture: "",
            itemPoint: Number(itemPoint.current.value),
            itemQty: Number(itemQty.current.value),
        })
        console.log(res)  
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/api/supplier/",{
            suppName: suppName.current.value,
            suppAddress: suppAddress.current.value,
            suppContact: suppContact.current.value,
            suppOwner: suppOwner.current.value,
            suppUrl: suppUrl.current.value,
        })
        console.log(res)
    };
    
  return (
    <div className='add'>
        <form className="ItemForm" onSubmit={handleItem}>
            <div className="fieldDiv">
                <label>Item Name</label>
                <input type="text" className="inputbar" placeholder="Enter item name..." ref={itemName}/>
            </div>
            <div className="fieldDiv">
                <label>Item Category</label>
                <input type="text" className="inputbar" placeholder="Enter item category..." ref={itemCategory}/>
            </div>
            <div className="fieldDiv">
                <label>Item  Quantity</label>
                <input type="text" className="inputbar" placeholder="Enter item quantity..." ref={itemQty}/>
            </div>
            <div className="fieldDiv">
                <label>Item Buying Point</label>
                <input type="text" className="inputbar" placeholder="Enter item buying point..." ref={itemPoint}/>
            </div>
            <div className="fieldDiv">
                <label>Item Status</label>
                <select ref={itemStatus}>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select>
            </div>
            <button className="SubmitButton" type="submit">Submit</button>
        </form>

        <form className="SuppForm" onSubmit={handleSubmit}>
            <div className="fieldDiv">
                <label>Supplier Name</label>
                <input type="text" className="inputbar" placeholder="Enter supplier name..." ref={suppName}/>
            </div>
            <div className="fieldDiv">
                <label>Supplier Address</label>
                <input type="text" className="inputbar" placeholder="Enter supplier address..." ref={suppAddress}/>
            </div>
            <div className="fieldDiv">
                <label>Supplier Contact Number</label>
                <input type="text" className="inputbar" placeholder="Enter supplier contact number..." ref={suppContact}/>
            </div>
            <div className="fieldDiv">
                <label>Supplier Contact Name</label>
                <input type="text" className="inputbar" placeholder="Enter supplier contact name..." ref={suppOwner}/>
            </div>
            <div className="fieldDiv">
                <label>Supplier Website URL</label>
                <input type="text" className="inputbar" placeholder="Enter supplier website..." ref={suppUrl}/>
            </div>
            <button className="SubmitButton" type="submit">Submit</button>
        </form>
    </div>
  )
}
