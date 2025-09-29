import { Señalador } from "../Common/Señalador"
import { ContactContent } from "./ContactContent"
ContactContent
export const Horarios = () => {
    const { Horarios } = ContactContent

    return (
        <>
            <div>
                <section>
                    {/* Señalador */}
                    <div className="mb-6 text-center mx-auto">
                        <Señalador numero="2 " text="Horarios" className="inline-block" />
                    </div>
                </section>
                <section>
                    <div className="w-full max-w-6xl mx-auto px-4 py-12">
                        {/* Título */}
                        <h2 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-center">
                            nuestros datos
                        </h2>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {Horarios.map((horario) => (
                                <div
                                    key={horario.id}
                                    className="p-8 bg-white hover:bg-gray-50 rounded-2xl transition-all shadow-md border border-gray-100"
                                >
                                    {/* Título de la card */}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-8 text-center">
                                        {horario.tipo}
                                    </h3>

                                    {/* Items */}
                                    <div className="space-y-6">
                                        {horario.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center">
                                                <span className={`text-sm ${item.destacado ? 'text-orange-500 font-medium' : 'text-gray-600'}`}>
                                                    {item.label}
                                                </span>
                                                <span className={`text-sm font-medium ${item.destacado ? 'text-gray-700' : 'text-gray-900'}`}>
                                                    {item.valor}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
