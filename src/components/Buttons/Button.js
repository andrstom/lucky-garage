import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];

const sizes = ['btn--medium', 'btn--small', 'btn--large'];

/**
 * Default button
 * @param {children, cName, onClick, link, buttonStyle, buttonSize}
 * @returns Link
 */
export const Button = ({
    children,
    onClick,
    link,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle)
        ? buttonStyle
        : styles[0];

    const checkButtonSize = sizes.includes(buttonSize)
        ? buttonSize
        : styles[0];

    return (
        <Link to={link}>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    );
}