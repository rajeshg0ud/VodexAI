import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, CreditCard, Search, User } from 'react-feather';
import './Sidebar.css';
import { FaProjectDiagram, FaUsers, FaBriefcase, FaBitcoin, FaClock, FaCreditCard, FaBell, FaQuestionCircle } from 'react-icons/fa';

const SideNavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const NavItem = ({ to, currentPath, children, icon }) => {
        const isActive = currentPath === to;
        const baseClasses = 'nav-item';

        return (
            <li>
                <Link to={to} className={`${baseClasses} ${isActive ? 'active' : ''}`}>
                    <div className="nav-link">
                        {icon && <div className="icon">{icon}</div>}
                        <span>{children}</span>
                    </div>
                </Link>
            </li>
        );
    };

    if (!isSidebarOpen) {
        return (
            <>
                <div className="sidebar-closed">
                    <div className="sidebar-icons">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg" alt="hamburger"
                            className="hamburger-icon" onClick={() => toggleSidebar()} />
                        <div className="nav-icons">
                            <ul>
                                <li>
                                <NavItem to="/" currentPath={location.pathname} icon={<FaProjectDiagram size={20} />} className='nav-item'></NavItem>
                            <NavItem to="/crm" currentPath={location.pathname} icon={<FaUsers size={20} />} className='nav-item'></NavItem>
                            <NavItem to="/sales" currentPath={location.pathname} icon={<FaBriefcase size={20} />} className='nav-item'></NavItem>
                            <NavItem to="/crypto" currentPath={location.pathname} icon={<FaBitcoin size={20} />} className='nav-item'></NavItem>
                            <NavItem to="/knowledgebase" currentPath={location.pathname} icon={<FaClock size={20} />} className='nav-item'></NavItem>
                            <NavItem to="/account" currentPath={location.pathname} icon={<FaCreditCard size={20} />} className='nav-item'></NavItem>
                            
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content-closed"></div>
            </>
        );
    }

    return (
        <>
            <div className="sidebar-open">
                <div className="top-bar">
                    <h2>YOUR SITE</h2>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg' alt='hamburger' className='hamburger-icon-open' onClick={() => toggleSidebar()} />
                </div>

                <div className="nav-container">
                    <ul className="nav-list">
                        <li>
                            <NavItem to="/" currentPath={location.pathname} icon={<FaProjectDiagram size={20} />} className='nav-item'>Project</NavItem>
                            <NavItem to="/crm" currentPath={location.pathname} icon={<FaUsers size={20} />} className='nav-item'>CRM</NavItem>
                            <NavItem to="/sales" currentPath={location.pathname} icon={<FaBriefcase size={20} />} className='nav-item'>Sales</NavItem>
                            <NavItem to="/crypto" currentPath={location.pathname} icon={<FaBitcoin size={20} />} className='nav-item'>Crypto</NavItem>
                            <NavItem to="/knowledgebase" currentPath={location.pathname} icon={<FaClock size={20} />} className='nav-item'>Knowledge Base</NavItem>
                            <NavItem to="/account" currentPath={location.pathname} icon={<FaCreditCard size={20} />} className='nav-item'>Account</NavItem>
                        </li>
                    </ul>

                    <ul className="bottom-nav">
                        <li>
                            <NavItem to="/notifications" currentPath={location.pathname} icon={<FaBell size={20} />} className='nav-item'>Welcome</NavItem>
                            <NavItem to="/support" currentPath={location.pathname} icon={<FaQuestionCircle size={20} />} className='nav-item'>Access Denied</NavItem>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content-open"></div>
        </>
    );
}

export default SideNavBar;
