import "./dashItem.css"

export default function DashItem({item}) {
  return (
    <div className='dashItem'>
        <div className="dashItemName">{item.itemName}</div>
        <div className="dashItemSupply">{item.itemQty}</div>
    </div>
  )
}
