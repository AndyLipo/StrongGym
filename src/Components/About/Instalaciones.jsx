import React, { useState } from 'react'
import { Señalador } from '../Common/Señalador'
import { AboutContent } from './AboutContent'
import { SpotlightText } from '../Common/SpotlightText'

export const Instalaciones = () => {
    const { Instalaciones } = AboutContent
    const { Equipamientos } = Instalaciones
    const [selectedImage, setSelectedImage] = useState(null)

    // Triplicamos las imágenes para asegurar el scroll infinito
    const tripleEquipamientos = [...Equipamientos, ...Equipamientos, ...Equipamientos]

    const handleImageClick = (equipamiento) => {
        setSelectedImage(equipamiento)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <>
            <section className="mb-6 text-center mx-auto">
                <Señalador numero="2" text="Instalaciones" className="inline-block" />
            </section>
            <section>
                <div>
                    <SpotlightText />
                </div>
                <div className="overflow-hidden whitespace-nowrap py-8 relative">
                    <div className="inline-flex animate-scroll-infinite">
                        {tripleEquipamientos.map((Equipamiento, index) => (
                            <div
                                key={`${Equipamiento.id}-${index}`}
                                className="flex-shrink-0 mx-4 cursor-pointer transform transition-transform hover:scale-105"
                                onClick={() => handleImageClick(Equipamiento)}
                            >
                                <img
                                    className="w-64 h-48 object-cover rounded-lg shadow-lg"
                                    src={Equipamiento.imagen}
                                    alt={Equipamiento.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal para ver imagen ampliada */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl w-full">
                        {/* Botón cerrar */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                            aria-label="Cerrar imagen"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Imagen ampliada */}
                        <img
                            src={selectedImage.imagen}
                            alt={selectedImage.alt}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </>
    )
}