export default function CardShape3({ icon, title }) {
    return (
        <div className='relative overflow-hidden'>
            {/* SVG como contenedor principal de la card */}
            <svg viewBox="0 0 700 600" className="absolute inset-0 -ml-9 h-[400px] -mt-12 filter drop-shadow-lg">
                <defs>
                    <filter id="backdrop-blur-3" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    </filter>
                </defs>
                <path
                    d="
            M 106 42 L 422 107 C 440 118, 450 128, 447 140 L 396 439 C 389 468, 373 478, 345 480 L 50 481 C 23 480, 7 468, 0 440 L 55 68 C 67 56, 87 46, 106 42 Z"
                    fill="rgba(31, 41, 55, 0.3)"
                    stroke="rgba(107, 114, 128, 0.3)"
                    strokeWidth="2"
                />
            </svg>

            {/* Contenido dentro de la forma del SVG */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mr-30">
                {/* Icon sin fondo */}
                <div className="flex items-center justify-center text-orange-500 text-4xl">
                    {typeof icon === 'string' && icon.includes('.svg') ? (
                        <img src={icon} alt={title} className=" size-48" />
                    ) : (
                        <span src={icon} alt={title}>{icon}</span>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-white font-bold text-xl mb-2 -mt-12">{title}</h3>

                {/* <hr className="w-16 border-t-2 border-orange-500 mb-4" />

                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{description}</p> */}
            </div>
        </div>
    );
}