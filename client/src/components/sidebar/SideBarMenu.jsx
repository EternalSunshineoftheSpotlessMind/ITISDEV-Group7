import "./sidebar.css"

export default function SideBar({invent,orders}) {
    console.log(invent)
    const totalEarnings = orders.reduce((sum, item) => sum + item.totalPrice ,0)
  return (
    <div className="sidebar">
        <label>Order Stats:</label>
        <div className="totalItems">Number of Orders :{orders.length}</div> 
        <div className="totalItems">Total Earnings: P{totalEarnings}</div>
    </div>
  )
}
