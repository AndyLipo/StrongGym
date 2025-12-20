import { ContactContent } from './ContactContent'

export const CardContacto = () => {
    const { Contactos } = ContactContent
    return (
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl w-full rounded-lg p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {Contactos.map((Contacto) => {
                        const IconComponent = Contacto.icon;

                        // Determinar si tiene link
                        const hasLink = Contacto.link;
                        const CardWrapper = hasLink ? 'a' : 'div';
                        const linkProps = hasLink ? {
                            href: Contacto.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};

                        return (
                            <CardWrapper
                                key={Contacto.id}
                                {...linkProps}
                                className={`p-5 sm:p-6 bg-white hover:bg-gray-100 rounded-xl transition-colors flex flex-col items-center justify-center gap-3 sm:gap-4 shadow-lg text-center ${hasLink ? 'cursor-pointer' : ''}`}
                            >
                                {/* Círculo con ícono */}
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    {IconComponent ? (
                                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    ) : (
                                        <img
                                            src={Contacto.imagen}
                                            alt={Contacto.alt}
                                            className="w-7 h-7 sm:w-8 sm:h-8"
                                        />
                                    )}
                                </div>

                                {/* Título */}
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                    {Contacto.nombre}
                                </h3>

                                {/* Texto */}
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {Contacto.texto}
                                </p>
                            </CardWrapper>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}