import { Señalador } from "../Common/Señalador"
import { ContactContent } from "./ContactContent"

export const Horarios = () => {
    const { Horarios } = ContactContent

    return (
        <div className="py-8 md:py-12">
            <section className="max-w-7xl mx-auto">
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <Señalador numero="2" text="Horarios" />
                </div>
            </section>

            <section className="max-w-6xl mx-auto mt-6 sm:mt-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 sm:mb-8 md:mb-12 text-center text-gray-50">
                    Horarios de Atención
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {Horarios.map((horario) => (
                        <div
                            key={horario.id}
                            className="p-6 sm:p-8 bg-white hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-all shadow-md border-2 border-gray-100 hover:border-orange-500"
                        >
                            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                    {horario.tipo}
                                </h3>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {horario.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                                        <span className={`text-sm sm:text-base ${item.destacado ? 'text-orange-500 font-semibold' : 'text-gray-600 font-medium'}`}>
                                            {item.label}
                                        </span>
                                        <span className={`text-sm sm:text-base font-bold ${item.valor === 'Cerrado' ? 'text-red-500' : 'text-gray-900'} text-right`}>
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