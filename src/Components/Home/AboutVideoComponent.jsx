import AboutVideo from '../../assets/AboutVideo.mp4'
export const AboutVideoComponent = ({ children }) => {
    return (
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <video
                className='w-full h-full object-cover rounded-2xl'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={AboutVideo} type="video/mp4" />
                Tu navegador no soporta el elemento video.
            </video>

            {/* Overlay con gradiente para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>

            {/* Contenido de texto - izquierda en desktop, centrado en móvil */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="text-center md:text-left w-full md:w-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                        Sobre Nosotros
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-md sm:max-w-xl mb-2 sm:mb-3 mx-auto md:mx-0">
                        Transformamos vidas a través del fitness
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xs sm:max-w-sm mx-auto md:mx-0 leading-relaxed">
                        Con más de 10 años de experiencia ayudando a personas a alcanzar sus objetivos
                    </p>
                </div>
            </div>

            {/* Botón en esquina inferior derecha - centrado abajo en móvil */}
            {children && (
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 md:left-auto md:right-8 lg:right-12 transform -translate-x-1/2 md:translate-x-0 z-10">
                    {children}
                </div>
            )}
        </div>
    )
}