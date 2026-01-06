import React from 'react'

const Button = ({ onclick, className, children, type = 'button', bgColor = 'primary' }) => {
    let bgClassName = 'bg-primary';

    const bgColorMap = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
    }

    if (bgColorMap[bgColor]) {
        bgClassName = bgColorMap[bgColor];
    }

    return (
        <button
            onClick={onclick}
            className={`py-3 px-6 rounded-lg capitalize font-medium ${bgClassName} ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button