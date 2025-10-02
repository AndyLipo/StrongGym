import React, { useRef } from 'react'

export const Card3D = ({ children, className = "", intensity = 20 }) => {
    const cardRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return

        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / centerY * -intensity
        const rotateY = (x - centerX) / centerX * intensity

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
    }

    const handleMouseLeave = () => {
        if (!cardRef.current) return
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }

    // Para dispositivos táctiles
    const handleTouchMove = (e) => {
        if (!cardRef.current) return

        const card = cardRef.current
        const rect = card.getBoundingClientRect()
        const touch = e.touches[0]
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / centerY * -intensity
        const rotateY = (x - centerX) / centerX * intensity

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
    }

    const handleTouchEnd = () => {
        if (!cardRef.current) return
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`transform-gpu transition-transform duration-300 ease-out hover:scale-105 ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    )
}