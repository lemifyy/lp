import React, { useEffect, useRef, useState } from 'react';
import './ScrollEmphasis.css';

const ScrollEmphasis = ({ color = '#000' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once it's seen, we can stop observing if we only want it to animate once
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <span className={`scroll-emphasis ${isVisible ? 'active' : ''}`} ref={elementRef}>
            <svg className="scroll-emphasis-svg" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 6 15 4 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
                <path d="M18 18 Q 20 12 18 4" stroke={color} strokeWidth="3" strokeLinecap="round" />
                <path d="M26 20 Q 30 15 32 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
            </svg>
        </span>
    );
};

export default ScrollEmphasis;
