import React from 'react'

export const HeroContent = ({
    prefix,
    highlight,
    suffix,
    description,
    highlight2,
    size = "large"
}) => {
    const sizeClasses = {
        medium: "text-3xl sm:text-4xl md:text-4xl",
        large: "text-7xl sm:text-5xl md:text-8xl"

    }
    const smallerSizeClasses = {
        medium: "text-2xl sm:text-3xl md:text-3xl",    // Más pequeño que medium
        large: "text-5xl sm:text-4xl md:text-6xl"      // Más pequeño que large
    }
    return (
        <>
            <div className=''>
                <div className={`font-bold uppercase tracking-widest`}>
                    <p className={`${smallerSizeClasses[size]} text-white`}>{prefix}</p>
                    <p className={`${sizeClasses[size]} text-[var(--color-primary)] `}>{highlight}</p>
                    <p className={`${smallerSizeClasses[size]} text-white`}>
                        {suffix} <span className={`${sizeClasses[size]} text-[var(--color-primary)] `}>{highlight2}</span>
                    </p>
                </div>
                <p className="text-white max-w-md lg:max-w-xl mt-8">{description}</p>
            </div>
        </>
    )
}
