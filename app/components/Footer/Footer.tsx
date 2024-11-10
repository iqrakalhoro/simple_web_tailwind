import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#501818] text-[#ffe0e0] py-5 text-center">
            <div className="max-w-[1200px] mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Web. All rights reserved.</p>
                <ul className="list-none p-0 mt-5 flex flex-wrap justify-center gap-6 md:flex-row md:gap-8">
                    <li>
                        <a href="#privacy" className="text-[#320909] hover:text-[#ac5b5b] transition-colors duration-300 text-sm">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#terms" className="text-[#320909] hover:text-[#ac5b5b] transition-colors duration-300 text-sm">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-[#320909] hover:text-[#ac5b5b] transition-colors duration-300 text-sm">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
