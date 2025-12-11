import React from 'react';
import CTAButton from './CTAButton';
import HawkLogo from "../assets/hawkstack-logo.svg";
import RedHatLogo from "../assets/redhat-.svg";


const Navbar = () => {
    const menuItems = ['Home', 'Approach', 'Red Hat Services', 'RHCSA Certification'];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Logos */}
                    <div className="flex items-center gap-6">

                        {/* HawkStack Logo */}
                        <div className="flex items-center gap-2">
                            <img
                                src={HawkLogo}
                                alt="HawkStack Logo"
                                className="w-15h-15object-contain"
                            />
                        </div>

                        <div className="h-6 w-px bg-white/20"></div>

                        {/* Red Hat Logo */}
                        <div className="flex items-center gap-2">
                            <img
                                src={RedHatLogo}
                                alt="Red Hat Logo"
                                className="w-15-15object-contain"
                            />
                        </div>


                    </div>

                    {/* Center: Menu Items */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Right: CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                            Contact
                        </button>
                        <CTAButton variant="primary" className="text-sm">
                            Talk to Learning Team
                        </CTAButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
