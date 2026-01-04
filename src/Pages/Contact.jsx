import { Helmet } from "react-helmet-async";

import { Footer } from '../Components/Common/Footer';
import { Header } from '../Components/Common/Header';
import { WhatsAppBtn } from '../Components/Common/Icons/WhatsAppBtn';
import { ContactoForm } from '../Components/Contact/ContactoForm';
import { HeroContact } from '../Components/Contact/HeroContact';
import { Horarios } from '../Components/Contact/Horarios';
import { InfoContacto } from '../Components/Contact/InfoContacto';

export const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contacto | Strong Training Escobar</title>
                <meta
                    name="description"
                    content="Contactá a Strong Training en Escobar y comenzá tu plan de entrenamiento personalizado. Horarios, ubicación y atención directa."
                />
                <link
                    rel="canonical"
                    href="https://strongtraining.com.ar/contacto"
                />
            </Helmet>

            <div className="bg-gradient-to-br from-black via-zinc-900 to-zinc-700 text-white min-h-screen">
                <nav
                    className="flex justify-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-zinc-900/80 w-full"
                    role="navigation"
                    aria-label="Navegación principal"
                >
                    <Header />
                </nav>

                <main className="pt-20">
                    {/* Hero con H1 */}
                    <section>
                        <h1 className="sr-only">Contacto Strong Training Escobar</h1>
                        <HeroContact />
                    </section>

                    {/* Contenido SEO adicional */}
                    <section className="px-4 md:px-8 lg:px-16 py-12 max-w-7xl mx-auto">
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Comenzá tu Transformación en Strong Training
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                        ¿Por qué elegir Strong Training?
                                    </h3>
                                    <p className="mb-4">
                                        En Strong Training entendemos que cada persona tiene objetivos únicos y específicos.
                                        Por eso ofrecemos un enfoque completamente personalizado para tu entrenamiento.
                                        Nuestro gimnasio en Escobar se especializa en entrenamiento de fuerza, hipertrofia
                                        y acondicionamiento físico integral.
                                    </p>
                                    <p className="mb-4">
                                        Contamos con entrenadores certificados que diseñan planes de entrenamiento adaptados
                                        a tu nivel actual, ya seas principiante o atleta avanzado. Cada sesión está
                                        cuidadosamente planificada para maximizar tus resultados y minimizar el riesgo de lesiones.
                                    </p>
                                    <p className="mb-4">
                                        Nuestras instalaciones están equipadas con tecnología y equipamiento
                                        profesional que te permitirá realizar entrenamientos efectivos y seguros. Desde máquinas
                                        de peso libre hasta zonas de entrenamiento funcional, tenemos todo lo necesario para
                                        tu progreso.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                        Servicios y Modalidades de Entrenamiento
                                    </h3>
                                    <p className="mb-4">
                                        Ofrecemos diferentes modalidades de entrenamiento para adaptarnos a tus necesidades.
                                        El entrenamiento personalizado uno a uno te brinda atención exclusiva del entrenador
                                        durante toda tu sesión.
                                    </p>
                                    <p className="mb-4">
                                        Nuestros programas incluyen evaluación física inicial, plan nutricional básico,
                                        seguimiento constante de tu evolución y ajustes periódicos según tus avances.
                                        También brindamos asesoramiento sobre técnica de ejercicios, prevención de lesiones
                                        y optimización del rendimiento deportivo.
                                    </p>
                                    <p className="mb-4">
                                        La ubicación de nuestro gimnasio en Escobar es estratégica y de fácil acceso. Nuestros horarios flexibles se adaptan
                                        a tu rutina, ya sea que prefieras entrenar temprano por la mañana, durante el mediodía
                                        o por la tarde-noche.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                    Contactanos Hoy y Recibí tu Clase
                                </h3>
                                <p className="mb-4 text-gray-300">
                                    Te invitamos a conocer nuestras instalaciones y experimentar una clase.
                                    Durante esta sesión inicial, realizaremos una evaluación completa de tu condición física,
                                    discutiremos tus objetivos personales y te mostraremos cómo podemos ayudarte a alcanzarlos.
                                </p>
                                <p className="mb-4 text-gray-300">
                                    Podés contactarnos a través del formulario en esta página, por WhatsApp o visitándonos
                                    directamente en nuestro gimnasio durante nuestros horarios de atención. Nuestro equipo
                                    está listo para responder todas tus consultas sobre planes de entrenamiento, precios,
                                    disponibilidad de horarios y cualquier otra información que necesites.
                                </p>
                                <p className="text-gray-300">
                                    No importa cuál sea tu nivel actual o qué objetivos tengas en mente, en Strong Training
                                    encontrarás el apoyo profesional y la motivación que necesitás para transformar tu cuerpo
                                    y mejorar tu calidad de vida. ¡Tu transformación comienza hoy!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Información de contacto */}
                    <section>
                        <h2 className="sr-only">Información de Contacto</h2>
                        <InfoContacto />
                    </section>

                    {/* Horarios */}
                    <section>
                        <h2 className="sr-only">Horarios de Atención</h2>
                        <Horarios />
                    </section>

                    {/* Formulario */}
                    <section>
                        <h2 className="sr-only">Formulario de Contacto</h2>
                        <ContactoForm />
                    </section>

                    <WhatsAppBtn />

                    <Footer />
                </main>
            </div>
        </>
    );
};