import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationComponent() {
    return (
        <div className="main-sidebar">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index.html">Stisla</a>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <a href="index.html">St</a>
                </div>
                <ul className="sidebar-menu">
                    {/* <li className="menu-header">Dashboard</li> */}
					<li>
						<NavLink activeClassName="bg-light" className="nav-link" exact to="/">
							<i className="far fa-square"></i> <span>Dashboard</span>
						</NavLink>
					</li>
                    <li>
						<NavLink activeClassName="bg-light" className="nav-link" exact to="/cars">
							<i className="far fa-square"></i> <span>Cars</span>
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="bg-light" className="nav-link" exact to="/drivers">
							<i className="far fa-square"></i> <span>Drivers</span>
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="bg-light" className="nav-link" exact to="/goings">
							<i className="far fa-square"></i> <span>Goings</span>
						</NavLink>
					</li>
                </ul>
            </aside>
        </div>
    );
}
