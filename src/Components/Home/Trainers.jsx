import { ContainerAb } from '../Common/ContainerAb'
import { HeroText } from './HeroText' // Asegúrate de importar las imágenes
import Martin from '../../assets/Martin.jpg'
import Mirta from '../../assets/Mirta.jpg'
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
                    <button className="bg-black/20 hover:bg-black/30 text-white px-6 py-3 rounded-full border border-white/20 transition-all duration-300 w-fit">
                        More Trainers →
                    </button>
                </div>

                {/* Lado derecho - Imagen del trainer */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="relative w-full max-w-2xl h-80">
                        {/* Card Martin (superpuesta, más atrás) */}
                        <div className="absolute top-4 left-8 z-10 group cursor-pointer">
                            <div className="relative w-64 h-82 rounded-4xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:z-30"
                                style={{ backgroundImage: `url(${Martin})` }}>
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Texto superpuesto */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-1">Jack Drake</h3>
                                    <p className="text-zinc-300 text-sm">Trainer 1</p>
                                </div>
                            </div>
                        </div>

                        {/* Card Mirta (superpuesta, más adelante) */}
                        <div className="absolute top-8 right-4 z-20 group cursor-pointer">
                            <div className="relative w-64 h-72 rounded-4xl overflow-hidden bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:z-30"
                                style={{ backgroundImage: `url(${Mirta})` }}>
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Texto superpuesto */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-1">Nathaniel</h3>
                                    <p className="text-zinc-300 text-sm">Trainer 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
