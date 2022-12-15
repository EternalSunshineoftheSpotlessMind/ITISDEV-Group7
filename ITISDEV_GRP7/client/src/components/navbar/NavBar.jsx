import { NavLink } from "react-router-dom"
import "./navbar.css"


export default function NavBar() {
  return (
    <div className="nav">
        <div className="navLeft">OTSER</div>
        <div className="navCenter"></div>
        <div className="navRight">
            <ul className="navButtons">
                <li className="navButtonItem">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>DASHBOARD</NavLink>
                </li>
                <li className="navButtonItem">
                    <NavLink to="/inventory" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>INVENTORY</NavLink>
                </li>
                <li className="navButtonItem">
                    <NavLink to="/suppliers" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>SUPPLIERS</NavLink>
                </li>
                <li className="navButtonItem">
                    
                </li>
            </ul>
        </div>
    </div>
  )
}
