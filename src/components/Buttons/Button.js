import React from 'react';
import './Button.css';

const styles = ['btn--primary', 'btn--outline'];
const sizes = ['btn--medium', 'btn--small', 'btn--large'];

export const Button = ({
    children,
    onClick,
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
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}