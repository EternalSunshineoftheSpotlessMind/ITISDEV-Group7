import "./sidebar.css"

export default function SideBar({invent}) {
    const totalItems = invent.reduce((sum, item) => sum + item.itemSupply ,0)
    const lowItems = invent.filter(item => {return item.itemSupply<=20}).length
  return (
    <div className="sidebar">
        Stats:
        <div className="totalItems">Low Stock Item :{lowItems}</div> 
        <div className="totalItems">Total Items: {totalItems}</div>
    </div>
  )
}
