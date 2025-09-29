import { HeroText } from './HeroText' // Asegúrate de importar las imágenes
import Martin from '../../assets/Martin.jpg'
import Mirta from '../../assets/Mirta.jpg'
import { ButtonGtStrt } from '../Common/ButtonGtStrt'
export const Trainers = () => {
    const { Images } = HeroText; // Obtener las imágenes

    return (
        <div className="relative w-full h-full">
            {/* Fondo naranja con clip-path y gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 [clip-path:polygon(0%_0%,45%_0%,70%_50%,45%_100%,0%_100%)]">
            </div>
            {/* Overlay difuminado en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-40">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent"></div>
                <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>
            {/* Contenido sobre el fondo */}
            <div className="relative z-10 flex h-full">
                {/* Lado izquierdo - Texto */}
                <div className="flex-1 flex flex-col justify-center p-8 lg:p-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Nuestros Entrenadores
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum faucibus interdum nunc, et eleifend neque sagittis sit.
                        Donec dignissim quam eu aliquet fermentum.
                    </p>
                    <ButtonGtStrt txt="Más entrenadores" />
                </div>
                {/* Lado derecho - Imagen del trainer */}
                <div className="flex-1 flex items-end lg:items-center justify-center p-4 sm:p-6 md:p-8">
                    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-96">

                        {/* Layout Mobile - Horizontal en fila */}
                        <div className="flex lg:hidden justify-center items-end gap-3 sm:gap-4 h-full pb-4 mt-40 -ml-75">
                            {/* Card Claudio */}
                            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
                                <div className="relative w-23 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-cover bg-center shadow-xl"
                                    style={{ backgroundImage: `url(${Martin})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 text-white">
                                        <h3 className="text-sm font-bold">Claudio</h3>
                                        <p className="text-zinc-200 text-xs">Entrenador</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Martin */}
                            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
                                <div className="relative w-23 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-cover bg-center shadow-xl"
                                    style={{ backgroundImage: `url(${Martin})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 text-white">
                                        <h3 className="text-sm font-bold">Martin</h3>
                                        <p className="text-zinc-200 text-xs">Entrenador</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Mirta */}
                            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
                                <div className="relative w-23 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-cover bg-center shadow-xl"
                                    style={{ backgroundImage: `url(${Mirta})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 text-white">
                                        <h3 className="text-sm font-bold">Mirta</h3>
                                        <p className="text-zinc-200 text-xs">Especialista</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layout Desktop - Superpuestas original */}
                        <div className="hidden lg:block relative w-full max-w-lg h-96">
                            {/* Card Claudio (atrás) */}
                            <div className="absolute bottom-32 -left-24 z-10 group cursor-pointer transform -rotate-2">
                                <div className="relative w-72 h-80 rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:z-30 shadow-2xl"
                                    style={{ backgroundImage: `url(${Martin})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">Claudio</h3>
                                        <p className="text-zinc-200 text-base">Entrenador Personal</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Martin (centro) */}
                            <div className="absolute top-0 left-12 z-10 group cursor-pointer transform -rotate-2">
                                <div className="relative w-72 h-80 rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:z-30 shadow-2xl"
                                    style={{ backgroundImage: `url(${Martin})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">Martin</h3>
                                        <p className="text-zinc-200 text-base">Entrenador Personal</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Mirta (adelante) */}
                            <div className="absolute top-12 -right-5 z-20 group cursor-pointer transform rotate-2">
                                <div className="relative w-72 h-80 rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-0 group-hover:z-30 shadow-2xl"
                                    style={{ backgroundImage: `url(${Mirta})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">Mirta</h3>
                                        <p className="text-zinc-200 text-base">Especialista Fitness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
