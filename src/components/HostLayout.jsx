import { Outlet, NavLink } from 'react-router'

export default function HostLayout() {
    return (
        <main>
            <nav className="host-nav">
                <ul>
                    <li><NavLink to="." end className={({ isActive }) => isActive? 'active' : ''}>Dashboard</NavLink></li>
                    <li><NavLink to="income" className={({ isActive }) => isActive? 'active' : '' }>Income</NavLink></li>
                    <li><NavLink to="vans" className={({ isActive }) => isActive? 'active' : '' }>Vans</NavLink></li>
                    <li><NavLink to="reviews" className={({ isActive }) => isActive? 'active' : '' }>Reviews</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </main>
    )
}