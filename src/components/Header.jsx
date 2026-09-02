import { Link, NavLink } from 'react-router'

export default function Header() {
    return (
        <header>
            <Link className="brand-logo" to="/">#VanLife</Link>
            <nav >
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive? 'active' : ''}>Host</NavLink></li>
                    <li><NavLink to="/About" className={({ isActive }) => isActive? 'active' : '' }>About</NavLink></li>
                    <li><NavLink to="/Vans" className={({ isActive }) => isActive? 'active' : '' }>Vans</NavLink></li>
                    <li><NavLink to="/Login" className={({ isActive }) => isActive? 'active' : '' }>Login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}