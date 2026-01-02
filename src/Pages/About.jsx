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
                    <section>
                        <HeroVideo />
                    </section>

                    {/* <section>
            <Historia />
          </section> */}

                    <section>
                        <Entrenadores />
                    </section>

                    <section>
                        <Instalaciones />
                    </section>

                    {/* <section>
            <Testimonio />
          </section> */}

                    <section>
                        <Logros />
                    </section>

                    <WhatsAppBtn />

                    <Footer />
                </main>
            </div>
        </>
    );
};
