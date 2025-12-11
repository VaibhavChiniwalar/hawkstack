import React from 'react';

const FloatingIcon = ({ children, delay = 0, className = '' }) => {
    const animationClass = delay > 0 ? 'animate-float-delayed' : 'animate-float';

    return (
        <div
            className={`${animationClass} ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default FloatingIcon;
