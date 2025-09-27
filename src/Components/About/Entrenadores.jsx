import { Señalador } from "../Common/Señalador"
import { AboutContent } from "./AboutContent"
export const Entrenadores = () => {
    const { Entrenadores } = AboutContent
    const { CardEntrenadores } = Entrenadores
    return (
        <>
            <section className="mb-6 text-center mx-auto">
                <Señalador numero="2 " text="Entrenadores" className="inline-block" />
            </section>
            <section className="flex justify-center">
                <h3 className="text-3xl sm:text-3xl md:text-5xl font-bold uppercase tracking-widest text-black">
                    {Entrenadores.titulo}
                </h3>
            </section>
            <div className="space-y-8">
                {Entrenadores.CardEntrenadores.map((CardEntrenador, index) => {
                    const esImpar = index % 2 !== 0; // true cuando la imagen va a la derecha
                    return (
                        <section
                            key={CardEntrenador.id}
                            className={`flex items-center mt-10 ${esImpar ? 'flex-row-reverse' : 'flex-row'
                                }`}
                        >
                            <div className={`flex-1 ${esImpar ? 'pl-4' : 'pr-4'}`}>
                                <img
                                    src={CardEntrenador.imagen}
                                    alt={CardEntrenador.alt}
                                    className={`h-auto rounded-lg ${esImpar ? 'ml-55' : 'ml-46'
                                        }`}
                                />
                            </div>
                            <div className={`flex-1 ${esImpar ? 'pl-46' : 'pr-38'}`}>
                                <p className="text-lg">{CardEntrenador.texto}</p>
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    )
}
