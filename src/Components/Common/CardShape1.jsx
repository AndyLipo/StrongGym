export default function CardShape1({ icon, title }) {
    return (
        <div className='relative'>
            {/* SVG como contenedor principal de la card */}
            <svg viewBox="0 0 700 600" className="absolute inset-0 filter drop-shadow-lg h-[450px] -mt-20 -ml-22">
                <defs>
                    <filter id="backdrop-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    </filter>
                </defs>
                <path
                    d="
            M 150 60
            H 550
            A 40 40 0 0 1 590 100
            L 540 460
            C 533 490, 523 500, 500 500
            H 200
            C 177 500, 167 490, 160 460
            L 110 100
            A 40 40 0 0 1 150 60
            Z
          "
                    fill="rgba(31, 41, 55, 0.3)"
                    stroke="rgba(107, 114, 128, 0.3)"
                    strokeWidth="2"
                    className="backdrop-blur-lg"
                />
            </svg>

            {/* Contenido dentro de la forma del SVG */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                {/* Icon sin fondo */}
                <div className="flex items-center justify-center text-orange-500 text-3xl">
                    {typeof icon === 'string' && icon.includes('.svg') ? (
                        <img src={icon} alt={title} className="size-48" />
                    ) : (
                        <img src={icon} alt={title}>{icon}</img>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-white font-bold text-xl mb-2 -mt-12">{title}</h3>

                {/* HR Separator */}
                {/* <hr className="w-16 border-t-2 border-orange-500 mb-4" /> */}

                {/* Descripción */}
                {/* <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{description}</p> */}
            </div>
        </div>
    );
}