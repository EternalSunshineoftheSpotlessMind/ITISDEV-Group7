import './item.css'

export default function Item({item}) {
  return (
    <div className="item">
        <div className="itemID">{item._id}</div>
        <div className="itemName">{item.itemName}</div>
        <div className="itemCategory">{item.itemCategory}</div>
        <div className="itemPoint">{item.itemSupply}</div>
        <div className="itemStatus">{item.itemStatus?"Active":"Inactive"}</div>
        <div className="itemButtons">
            <button className='itemEditButton'>Edit</button>
            <button className='itemSaveButton'>Save</button>
        </div>
    </div>
  )
}
