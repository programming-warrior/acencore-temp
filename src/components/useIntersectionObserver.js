import { useRef, useState, useEffect } from 'react';

export default function UseIntersectionObserver(ref, options) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
            if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [ref, options]);

    return isVisible;
}