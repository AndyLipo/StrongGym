import PrismaticBurst from "./PrismaticBurst"

export const HeroContact = () => {
    return (
        <>
            <div style={{ width: '100%', height: '700px', position: 'relative' }}>
                {/* Fondo animado */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <PrismaticBurst
                        animationType="rotate3d"
                        intensity={2}
                        speed={0.5}
                        distort={1.0}
                        paused={false}
                        offset={{ x: 0, y: 0 }}
                        hoverDampness={0.25}
                        rayCount={24}
                        mixBlendMode="lighten"
                        colors={['#000000', '#ff8c00', '#ffffff']}
                    />
                </div>

                {/* Contenido por encima */}
                <section className="relative z-10 flex flex-col items-center justify-center text-white min-h-[50vh] sm:min-h-[60vh] md:min-h-[100vh] px-4 py-12 sm:py-16">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-3 sm:mb-4 text-center drop-shadow-2xl'>
                        Contáctanos
                    </h1>
                    <h2 className="italic text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xl md:max-w-2xl px-4 drop-shadow-2xl">
                        Estamos aquí para ayudarte a comenzar tu transformación
                    </h2>
                </section>
            </div>
        </>
    )
}