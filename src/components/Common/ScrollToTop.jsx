import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLine } from "react-icons/tb";
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top HTTP scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="scroll-btn"
            >
                <TbArrowBigUpLine size={24} />
            </button>
        </div>
    );
};

export default ScrollToTop;
