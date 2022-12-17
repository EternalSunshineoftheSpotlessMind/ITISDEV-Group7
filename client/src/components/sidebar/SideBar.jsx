import "./sidebar.css"

export default function SideBar({invent,orders}) {
    console.log(invent)
    const totalItems = invent.reduce((sum, item) => sum + item.itemQty ,0)
    const lowItems = invent.filter(item => {return item.itemQty<=item.itemPoint}).length
    
  return (
    <div className="sidebar">
        Inventory Stats:
        <div className="totalItems">Low Stock Item :{lowItems}</div> 
        <div className="totalItems">Total Items: {totalItems}</div>
    </div>
  )
}
