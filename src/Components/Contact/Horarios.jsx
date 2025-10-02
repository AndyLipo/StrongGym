import { Señalador } from "../Common/Señalador"
import { ContactContent } from "./ContactContent"

export const Horarios = () => {
    const { Horarios } = ContactContent

    return (
        <div className="py-8 md:py-12">
            <section className="max-w-7xl mx-auto">
                {/* Señalador */}
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <Señalador numero="2" text="Horarios" />
                </div>
            </section>

            <section className="max-w-6xl mx-auto mt-6 sm:mt-8">
                {/* Título */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 sm:mb-8 md:mb-12 text-center text-gray-900">
                    Nuestros Datos
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {Horarios.map((horario) => (
                        <div
                            key={horario.id}
                            className="p-6 sm:p-8 bg-white hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-all shadow-md border border-gray-100"
                        >
                            {/* Título de la card */}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
                                {horario.tipo}
                            </h3>

                            {/* Items */}
                            <div className="space-y-4 sm:space-y-6">
                                {horario.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center gap-4">
                                        <span className={`text-xs sm:text-sm ${item.destacado ? 'text-orange-500 font-medium' : 'text-gray-600'}`}>
                                            {item.label}
                                        </span>
                                        <span className={`text-xs sm:text-sm font-medium ${item.destacado ? 'text-gray-700' : 'text-gray-900'} text-right`}>
                                            {item.valor}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}