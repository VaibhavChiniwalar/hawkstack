import React from 'react';

const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
    const variants = {
        primary:
            "bg-gradient-to-r from-brandBlue to-brandPurple text-white shadow-lg hover:shadow-xl neon-glow-blue",

        secondary:
            "bg-white/10 backdrop-blur-sm border border-white/20 text-white " +
            "hover:bg-white/20 hover:border-red-500 hover:text-red-400 hover:shadow-red-500/40",

    };
    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default CTAButton;
