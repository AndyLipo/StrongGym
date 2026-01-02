import React from 'react'
import { Señalador } from '../Common/Señalador'
import { AboutContent } from './AboutContent'
import { SpotlightText } from '../Common/SpotlightText'
export const Instalaciones = () => {
    const { Instalaciones } = AboutContent
    const { Equipamientos } = Instalaciones
    return (
        <>
            <section className="mb-6 text-center mx-auto">
                <Señalador numero="2 " text="Instalaciones" className="inline-block" />
            </section>
            <section>
                <div>
                    <SpotlightText />
                </div>
                <div className="overflow-hidden whitespace-nowrap py-8">
                    <div className="inline-flex animate-scroll">
                        {Equipamientos.map((Equipamiento) => (
                            <section
                                key={`${Equipamiento.id}-1`}
                                className="flex-shrink-0 mx-4"
                            >
                                <img
                                    className="w-64 h-48 object-cover rounded-lg shadow-lg"
                                    src={Equipamiento.imagen}
                                    alt={Equipamiento.alt}
                                />
                            </section>
                        ))}
                        {/* Duplicamos las imágenes para el efecto infinito */}
                        {Equipamientos.map((Equipamiento) => (
                            <section
                                key={`${Equipamiento.id}-2`}
                                className="flex-shrink-0 mx-4"
                            >
                                <img
                                    className="w-64 h-48 object-cover rounded-lg shadow-lg"
                                    src={Equipamiento.imagen}
                                    alt={Equipamiento.alt}
                                />
                            </section>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
