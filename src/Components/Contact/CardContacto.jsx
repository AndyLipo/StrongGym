import { ContactContent } from './ContactContent'

export const CardContacto = () => {
    const { Contactos } = ContactContent
    return (
        <>
            <div className="flex justify-center items-center px-4">
                <div className="max-w-6xl w-full rounded-lg p-8 flex items-center gap-8">
                    {Contactos.map((Contacto) => {
                        return (
                            <div
                                key={Contacto.id}
                                className="p-6 bg-white hover:bg-gray-100 rounded-xl transition-colors flex flex-col items-center justify-center gap-4 flex-1 shadow-lg text-center"
                            >
                                {/* Círculo con ícono más grande - ARRIBA */}
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={Contacto.imagen}
                                        alt={Contacto.alt}
                                        className="w-8 h-8 text-white"
                                    />
                                </div>

                                {/* Título - EN EL MEDIO */}
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {Contacto.nombre}
                                </h3>

                                {/* Texto - ABAJO */}
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {Contacto.texto}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}   
