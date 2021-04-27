import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { menuItems } from './MenuItems';
import LocaleContext from "../../context/LocaleContext"

export default function Navbar() {
    const { locale, toggleLocale } = React.useContext(LocaleContext)
    const [ toggleMenu, setToogleMenu ] = React.useState(false);

    const handleToggleMenu = () => setToogleMenu(!toggleMenu);
    const handleCloseMobileMenu = () => setToogleMenu(false);

    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <i className="fas fa-car"></i> Logo 
                </Link>
                <div className="menu-icon" onClick={handleToggleMenu}>
                    <i className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>

            <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
                
                {menuItems[locale].map((item, index) => {
                    return (
                        <li key={index} className={item.cName}><Link to={item.url} onClick={handleCloseMobileMenu}>{item.title}</Link></li>
                    );
                })}
                <li className="navbar-locale">
                    {locale === 'cs'
                        ? <button onClick={toggleLocale}>ENG</button>
                        : <button onClick={toggleLocale}>CS</button>
                    }
                </li>
                
            </ul>
        </nav>
        </>
    );
}

