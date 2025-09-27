import React from 'react'
import { Señalador } from '../Common/Señalador'
import { ContainerAb } from '../Common/ContainerAb'
import { AboutContent } from './AboutContent'

export const Testimonio = () => {
    const { Instalaciones } = AboutContent
    const { Testimonios } = Instalaciones

    return (
        <>
            <section className="mb-6 text-center mx-auto">
                <Señalador numero=" 4 " text="Testimonios" className="inline-block" />
            </section>
            <section className='mt-10'>
                <div className="relative">
                    {/* Cards de Testimonios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 px-4">
                        {Testimonios.map((testimonio) => (
                            <div key={testimonio.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                                {/* Imágenes */}
                                <div className="flex gap-4 mb-6">
                                    <img
                                        src={testimonio.imagen1}
                                        alt={testimonio.alt1}
                                        className="flex-1 rounded-lg"
                                    />
                                    <img
                                        src={testimonio.imagen2}
                                        alt={testimonio.alt2}
                                        className="flex-1 rounded-lg"
                                    />
                                </div>

                                {/* Texto del testimonio */}
                                <div className="border-4 border-dashed border-gray-300 rounded-lg p-4">
                                    <p className="text-gray-600 text-center italic">
                                        "{testimonio.texto}"
                                    </p>
                                    <div className="mt-4 text-center">
                                        <span className="font-semibold text-gray-800">{testimonio.nombre}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}