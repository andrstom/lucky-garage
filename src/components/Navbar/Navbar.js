import React from 'react';
import './Navbar.css'
import { menuItems } from './MenuItems';
import LocaleContext from "../../context/LocaleContext"

export default function Navbar() {
    const { locale, toggleLocale } = React.useContext(LocaleContext)

    return (
        <nav className="navbar-items">
            <div className="navbar-logo">
                Lucky garage
                <div className="menu-icon"></div>
            </div>

            <ul>
                {menuItems[locale].map((item, index) => {
                    return (
                        <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
                    );
                })}
                {locale === 'cs'
                    ? <button onClick={toggleLocale}>ENG</button>
                    : <button onClick={toggleLocale}>CS</button>
                }
            </ul>
        </nav>
    );
}

