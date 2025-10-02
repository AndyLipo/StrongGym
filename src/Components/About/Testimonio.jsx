import { Señalador } from '../Common/Señalador'
import { AboutContent } from './AboutContent'

export const Testimonio = () => {
    const { Instalaciones } = AboutContent
    const { Testimonios } = Instalaciones

    return (
        <div className=" max-w-7xl mx-auto py-8 md:py-12">
            <section className="mb-6 sm:mb-8 text-center lg:text-left">
                <Señalador numero="4" text="Testimonios" />
            </section>

            <section className='mt-6 sm:mt-8 md:mt-10'>
                <div className="relative">
                    {/* Cards de Testimonios */}
                    <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {Testimonios.map((testimonio) => (
                            <div
                                key={testimonio.id}
                                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Imágenes - MÁS PEQUEÑAS */}
                                <div className="flex gap-2 mb-4">
                                    <img
                                        src={testimonio.imagen1}
                                        alt={testimonio.alt1}
                                        className="flex-1 rounded-lg object-cover w-full h-20 sm:h-24 md:h-28"
                                    />
                                    <img
                                        src={testimonio.imagen2}
                                        alt={testimonio.alt2}
                                        className="flex-1 rounded-lg object-cover w-full h-20 sm:h-24 md:h-28"
                                    />
                                </div>

                                {/* Texto del testimonio */}
                                <div className="border-2 sm:border-3 border-dashed border-gray-300 rounded-lg p-3 sm:p-4">
                                    <p className="text-gray-600 text-center italic text-xs sm:text-sm leading-relaxed line-clamp-4">
                                        "{testimonio.texto}"
                                    </p>
                                    <div className="mt-3 text-center">
                                        <span className="font-semibold text-gray-800 text-sm sm:text-base">
                                            {testimonio.nombre}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}