import AboutVideo from '../../assets/AboutVideo.mp4'

export const AboutVideoComponent = ({ children, title, subtitle }) => {
    return (
        <div className="w-full h-150 ">
            <video
                className='w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={AboutVideo} type="video/mp4" />
                Tu navegador no soporta el elemento video.
            </video>

            {/* Overlay con gradiente para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Contenido de texto centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                {title && (
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        {title}
                    </h2>
                )}
                {subtitle && (
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Botón en esquina inferior derecha */}
            {children && (
                <div className="absolute bottom-4 right-4 z-10">
                    {children}
                </div>
            )}
        </div>
    )
}