import { Link } from 'react-router-dom'
import { Señalador } from '../Common/Señalador'
import { AboutContent } from './AboutContent'

export const Logros = () => {
    const { Logros } = AboutContent

    return (
        <>
            <section className="mb-6 text-center mx-auto">
                <Señalador numero="3 " text="Logros" className="inline-block" />
            </section>

            <section className="bg-gray-950 py-16 mt-10">
                <div className="container mx-auto px-4">
                    {/* Grid de estadísticas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {/* Años de experiencia */}
                        <div className="text-white">
                            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-2">
                                {Logros.anosExperiencia.numero}
                            </div>
                            <p className="text-lg md:text-xl text-blue-300">
                                {Logros.anosExperiencia.texto}
                            </p>
                        </div>

                        {/* Miembros transformados */}
                        <div className="text-white">
                            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-2">
                                {Logros.miembrosTransformados.numero}
                            </div>
                            <p className="text-lg md:text-xl text-blue-300">
                                {Logros.miembrosTransformados.texto}
                            </p>
                        </div>

                        {/* Entrenadores certificados */}
                        <div className="text-white">
                            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-2">
                                {Logros.entrenadoresCertificados.numero}
                            </div>
                            <p className="text-lg md:text-xl text-blue-300">
                                {Logros.entrenadoresCertificados.texto}
                            </p>
                        </div>

                        {/* Acceso al gimnasio */}
                        <div className="text-white">
                            <div className="text-orange-500 text-5xl md:text-6xl font-bold mb-2">
                                {Logros.accesoGimnasio.numero}
                            </div>
                            <p className="text-lg md:text-xl text-blue-300">
                                {Logros.accesoGimnasio.texto}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección CTA */}
            <section className="bg-gradient-to-r from-orange-300 to-orange-500 py-16">
                <div className=" mx-auto  text-center">
                    <div className="mb-6">
                        <Señalador numero="4 " text="Call To Action" className="inline-block" />
                    </div>

                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
                        {Logros.cta.titulo}
                    </h2>

                    <div className="max-w-md mx-auto">
                        <Link to="/contacto#contact-form">
                            <button className="w-full bg-white text-orange-500 font-bold text-xl py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
                                {Logros.cta.botonTexto}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}