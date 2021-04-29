import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { menuItems } from './MenuItems';
import flag_cz from './flag_cz.png';
import flag_en from './flag_en.png';
import logo from './lg_logo_256.png';
import LocaleContext from "../../context/LocaleContext"

export default function Navbar() {
    const { locale, toggleLocale } = React.useContext(LocaleContext)
    const [ toggleMenu, setToogleMenu ] = React.useState(false);

    const handleToggleMenu = () => setToogleMenu(!toggleMenu);
    const handleCloseMobileMenu = () => setToogleMenu(false);
    
    return (
        <>
        <div className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logo} width="70" alt="logo" />
            </Link>
            <div className="menu-toggle" onClick={handleToggleMenu}>
                <i className={`fas fa-${toggleMenu ? "times" : "bars"} fa-2x`}></i>
            </div>

            <nav>
                <ul className={`nav-menu ${toggleMenu ? "active" : ""}`}>
                    {menuItems[locale].map((item, index) => {
                        return (
                            <li key={index} className="menu-item"><Link to={item.url} activeClassName="active" className={item.cName} onClick={handleCloseMobileMenu}>{item.title}</Link></li>
                        );
                    })}
                    <li className="menu-item">
                        <Link to="#" className="nav-links-flag" onClick={toggleLocale}>
                            {locale === 'cs'
                                ? <img src={flag_en} width="30" alt="en" />
                                : <img src={flag_cz} width="30" alt="cze" />
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="clearfix"></div>
        </div>
        </>
    );
}

