import { AboutContent } from "../About/AboutContent"
import { Señalador } from "../Common/Señalador"

export const Horarios = () => {
    const { Horarios } = AboutContent

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
                    <h3 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-center">nuestros datos</h3>
                </section>
                <section>
                    {Horarios.map((Horario) => {
                        <div
                            key={Horario.id}
                            className="p-6 bg-white hover:bg-gray-100 rounded-xl transition-colors flex flex-col items-center justify-center gap-4 flex-1 shadow-lg text-center"
                        >
                            {/* Título - EN EL MEDIO */}
                            <h3 className="text-lg font-semibold text-gray-900">
                                {Horario.nombre}
                            </h3>
                        </div>
                    })}
                </section>
            </div>
        </>
    )
}
