import { AboutContent } from './AboutContent' // ← Agregar esta línea

export const HeroVideo = ({ alt = "Hero Video" }) => {
    return (
        <div className={`relative w-full h-screen`}>
            {AboutContent.heroVideo ? (
                <>
                    {/* Video de fondo */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={alt}
                    >
                        <source src={AboutContent.heroVideo} type="video/mp4" />
                        Tu navegador no soporta el elemento video.
                    </video>
                    {/* Títulos centrados sobre el video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                        <h1 className='text-5xl md:text-6xl font-bold uppercase mb-4 text-center'>
                            {AboutContent.title}
                        </h1>
                        <p className='text-xl md:text-2xl text-center max-w-2xl px-4'>
                            {AboutContent.subtitle}
                        </p>
                    </div>
                </>
            ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                    No hay video disponible
                </div>
            )}
        </div>
    )
}