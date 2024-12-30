'use client'

// components/CustomCursor.tsx
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
const CustomCursor: React.FC = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'black',
                translateX: cursorX,
                translateY: cursorY,
                pointerEvents: 'none', // O cursor não interfere na interação com outros elementos
                zIndex: 9999 // Garante que o cursor fique acima de outros elementos
            }}
        />
    );
};

export default CustomCursor;
