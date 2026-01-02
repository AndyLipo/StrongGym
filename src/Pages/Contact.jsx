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
                    <section>
                        <HeroContact />
                    </section>

                    <section>
                        <InfoContacto />
                    </section>

                    <section>
                        <Horarios />
                    </section>

                    <section>
                        <ContactoForm />
                    </section>

                    <WhatsAppBtn />

                    <Footer />
                </main>
            </div>
        </>
    );
};
