import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let startTime = null;
                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = currentTime - startTime;

                        if (progress < duration) {
                            const percentage = Math.min(progress / duration, 1);
                            const ease = 1 - Math.pow(1 - percentage, 4); // Ease out quart

                            setCount(Math.floor(ease * end));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={elementRef}>{count}{suffix}</span>
    );
};

export default AnimatedCounter;
