import { useState } from 'react';
import { AboutContent } from '../About/AboutContent'

export const SpotlightText = () => {
    const { Instalaciones } = AboutContent
    const { Equipamientos } = Instalaciones
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    return (
        <>
            <div>
                <h3
                    className="flex justify-center text-3xl sm:text-3xl md:text-6xl font-bold uppercase tracking-widest relative cursor-default"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        color: 'white', // Color base del texto
                    }}
                >
                    <span
                        className="absolute inset-0 flex justify-center"
                        style={{
                            color: 'var(--color-primary)',
                            clipPath: isHovered
                                ? `circle(60px at ${mousePos.x}px ${mousePos.y}px)`
                                : 'circle(0px at 30% 30%)',
                            transition: isHovered ? 'none' : 'clip-path 0.3s ease-out'
                        }}
                    >
                        {Instalaciones.InstaTitulo}
                    </span>
                    {Instalaciones.InstaTitulo}
                </h3>
            </div>
        </>
    );
};