import { Helmet } from "react-helmet-async";

import { Entrenadores } from "../Components/About/Entrenadores";
import { HeroVideo } from "../Components/About/HeroVideo";
import { Historia } from "../Components/About/Historia";
import { Instalaciones } from "../Components/About/Instalaciones";
import { Logros } from "../Components/About/Logros";
import { Testimonio } from "../Components/About/Testimonio";
import { Footer } from "../Components/Common/Footer";
import { Header } from "../Components/Common/Header";
import { WhatsAppBtn } from "../Components/Common/Icons/WhatsAppBtn";

export const About = () => {
    return (
        <>
            <Helmet>
                <title>Sobre Nosotros | Strong Training Escobar</title>
                <meta
                    name="description"
                    content="Conocé Strong Training, nuestro equipo de entrenadores y nuestra filosofía de entrenamiento personalizado en Escobar."
                />
                <link
                    rel="canonical"
                    href="https://strongtraining.com.ar/sobrenosotros"
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
                        <h1 className="sr-only">Sobre Strong Training Escobar</h1>
                        <HeroVideo />
                    </section>

                    {/* Contenido SEO adicional */}
                    <section className="px-4 md:px-8 lg:px-16 py-12 max-w-7xl mx-auto">
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Nuestra Historia y Filosofía de Entrenamiento
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                        Quiénes Somos
                                    </h3>
                                    <p className="mb-4">
                                        Strong Training nació de la pasión por el entrenamiento de fuerza y el deseo de crear
                                        un espacio donde cada persona pueda alcanzar su máximo potencial físico. Ubicados en
                                        Escobar, somos un gimnasio especializado en entrenamiento personalizado que combina
                                        métodos probados con las últimas innovaciones en ciencias del ejercicio.
                                    </p>
                                    <p className="mb-4">
                                        Desde nuestros inicios, nos hemos enfocado en ofrecer un servicio de excelencia. Creemos firmemente que cada
                                        cuerpo es
                                        diferente y merece un enfoque único y personalizado. Por eso, trabajamos con sesiones individuales que permiten
                                        una atención cercana y detallada.
                                    </p>
                                    <p className="mb-4">
                                        Nuestro equipo está formado por profesionales certificados con años de experiencia
                                        en diversas disciplinas del fitness y el alto rendimiento. Cada entrenador se actualiza
                                        constantemente para brindarte las mejores técnicas y metodologías de entrenamiento
                                        disponibles en la actualidad.
                                    </p>
                                    <p className="mb-4">
                                        La comunidad que hemos construido es uno de nuestros mayores orgullos. En Strong Training
                                        no solo entrenás, formás parte de una familia que se apoya mutuamente, celebra logros
                                        juntos y se motiva para superar desafíos.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                        Nuestra Metodología
                                    </h3>
                                    <p className="mb-4">
                                        En Strong Training aplicamos una metodología integral que abarca todos los aspectos
                                        necesarios para tu transformación física. Comenzamos con una evaluación exhaustiva
                                        de tu condición actual, objetivos específicos y estilo de vida.
                                        Esta información nos permite diseñar un programa completamente personalizado.
                                    </p>
                                    <p className="mb-4">
                                        Nuestros programas de entrenamiento se basan en principios científicos de periodización,
                                        sobrecarga progresiva y especificidad. Trabajamos con ejercicios compuestos fundamentales
                                        como sentadillas, peso muerto, press de banca y dominadas, complementados con trabajo
                                        accesorio específico según tus necesidades.
                                    </p>
                                    <p className="mb-4">
                                        La técnica correcta es fundamental en nuestro enfoque. Dedicamos el tiempo necesario
                                        para que domines cada movimiento antes de aumentar la carga. Esta atención al detalle
                                        no solo maximiza tus resultados, sino que también previene lesiones y garantiza un
                                        progreso sostenible a largo plazo.
                                    </p>
                                    <p className="mb-4">
                                        Además del entrenamiento físico, ofrecemos orientación nutricional básica para que
                                        tu alimentación esté alineada con tus objetivos. Entendemos que el éxito en el gimnasio
                                        también depende de lo que hacés fuera de él, por eso te acompañamos en todos los aspectos
                                        de tu transformación.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FF8C00]">
                                    Nuestro Compromiso con Vos
                                </h3>
                                <p className="mb-4 text-gray-300">
                                    En Strong Training nos comprometemos a brindarte más que un simple espacio para entrenar.
                                    Te ofrecemos un ambiente motivador, profesional y seguro donde podés concentrarte en tus
                                    objetivos sin distracciones. Nuestras instalaciones están diseñadas específicamente para
                                    el entrenamiento de fuerza e hipertrofia, con equipamiento de primera calidad que incluye
                                    racks de sentadillas, barras olímpicas, barra smith, discos bumper y
                                    una amplia variedad de pesas y máquinas especializadas.
                                </p>
                                <p className="mb-4 text-gray-300">
                                    La limpieza y el mantenimiento de nuestras instalaciones son prioritarios. Realizamos
                                    protocolos de limpieza constantes y mantenimiento preventivo de todos los equipos para
                                    garantizar tu seguridad y comodidad. Además, contamos con baños equipados.
                                </p>
                                <p className="mb-4 text-gray-300">
                                    Te invitamos a formar parte de Strong Training y experimentar la diferencia que hace
                                    entrenar con un equipo profesional que realmente se preocupa por tus resultados. Ya sea
                                    que quieras ganar masa muscular, perder grasa corporal, mejorar tu rendimiento deportivo
                                    o simplemente sentirte mejor con tu cuerpo, estamos acá para ayudarte a lograrlo.
                                </p>
                                <p className="text-gray-300">
                                    Vení a conocernos y descubrí por qué somos el gimnasio preferido en Escobar para quienes
                                    buscan resultados reales y duraderos. Tu transformación comienza cuando vos decidís dar
                                    el primer paso, y nosotros estaremos ahí para acompañarte en cada momento del camino.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sección comentada - Historia
                    <section>
                        <Historia />
                    </section> 
                    */}

                    {/* Entrenadores */}
                    <section>
                        <h2 className="sr-only">Nuestro Equipo de Entrenadores</h2>
                        <Entrenadores />
                    </section>

                    {/* Instalaciones */}
                    <section>
                        <h2 className="sr-only">Nuestras Instalaciones</h2>
                        <Instalaciones />
                    </section>

                    {/* Sección comentada - Testimonios
                    <section>
                        <Testimonio />
                    </section>
                    */}

                    {/* Logros */}
                    <section>
                        <h2 className="sr-only">Nuestros Logros</h2>
                        <Logros />
                    </section>

                    <WhatsAppBtn />

                    <Footer />
                </main>
            </div>
        </>
    );
};