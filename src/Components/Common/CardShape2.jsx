export default function CardShape2({ icon, title, description }) {
    return (
        <div className='relative  hover:scale-105 transition-all duration-300'>
            {/* SVG como contenedor principal de la card */}
            <svg viewBox="0 0 700 600" className="absolute inset-0 h-[400px] -mt-12 ml-9 filter drop-shadow-lg">
                <defs>
                    <filter id="backdrop-blur-2" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    </filter>
                </defs>
                <path
                    d="
            M 419 42 L 103 107 C 85 118, 75 128, 78 140 L 129 439 C 136 468, 152 478, 180 480 L 475 481 C 502 480, 518 468, 525 440 L 470 68 C 458 56, 438 46, 419 42 Z
          "
                    fill="rgba(31, 41, 55, 0.3)"
                    stroke="rgba(107, 114, 128, 0.3)"
                    strokeWidth="2"
                />
            </svg>

            {/* Contenido dentro de la forma del SVG */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                {/* Icon sin fondo */}
                <div className="flex items-center justify-center text-orange-500 text-4xl mb-6">
                    {typeof icon === 'string' && icon.includes('.svg') ? (
                        <img src={icon} alt={title} className="w-12 h-12 filter brightness-0  invert-[0.4] sepia-[1] saturate-[5] hue-rotate-[15deg]" />
                    ) : (
                        <span>{icon}</span>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-white font-bold text-xl mb-2">{title}</h3>

                {/* HR Separator */}
                <hr className="w-16 border-t-2 border-orange-500 mb-4" />

                {/* Descripción */}
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
        </div>
    );
}
