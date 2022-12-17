import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../../context/Context"
import "./navbar.css"


export default function NavBar() {
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type : "LOGOUT"})
    }
  return (
    <div className="nav">
        <div className="navLeft">OTSER</div>
        <div className="navCenter"></div>
        <div className="navRight">
            <ul className="navButtons">
                <li className="navButtonItem">
                    {user.inventory?<NavLink to="/" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>DASHBOARD</NavLink>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.inventory?<NavLink to="/inventory" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>INVENTORY</NavLink>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.inventory?<NavLink to="/suppliers" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>SUPPLIERS</NavLink>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.inventory?<NavLink to="/add" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>ADD</NavLink>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.admin?!user.inventory?<NavLink to="/menu" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>MENU</NavLink>:<></>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.admin?!user.inventory?<NavLink to="/addMenu" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>ADD</NavLink>:<></>:<></>}
                </li>
                <li className="navButtonItem">
                    {user.admin?!user.inventory?<NavLink to="/orders" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>ORDERS</NavLink>:<></>:<></>}
                </li>
                <li className="navButtonItem" onClick={handleLogout}>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>LOGOUT</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
