import { Señalador } from "../Common/Señalador"
import { AboutContent } from "./AboutContent"

export const Entrenadores = () => {
    const { Entrenadores } = AboutContent

    return (
        <div className="max-w-7xl mx-auto py-8 md:py-12">
            <section className="mb-6 sm:mb-8 text-center lg:text-left">
                <Señalador numero="2" text="Entrenadores" />
            </section>
            <section className="px-4 sm:px-6 md:px-8 lg:px-12">
                <section className="flex justify-center lg:justify-start mb-8 md:mb-12">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-black text-center lg:text-left">
                        {Entrenadores.titulo}
                    </h3>
                </section>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    {Entrenadores.CardEntrenadores.map((CardEntrenador, index) => {
                        const esImpar = index % 2 !== 0;
                        return (
                            <section
                                key={CardEntrenador.id}
                                className={`flex flex-col ${esImpar ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 md:gap-8`}
                            >
                                <div className="w-full lg:flex-1">
                                    <img
                                        src={CardEntrenador.imagen}
                                        alt={CardEntrenador.alt}
                                        className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[300px] sm:max-h-[400px] lg:max-h-none"
                                    />
                                </div>
                                <div className="w-full lg:flex-1">
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                                        {CardEntrenador.texto}
                                    </p>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}