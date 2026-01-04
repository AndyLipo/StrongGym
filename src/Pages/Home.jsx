import { Helmet } from "react-helmet-async";

import { ButtonGtStrt } from '../Components/Common/ButtonGtStrt';
import { Header } from '../Components/Common/Header';
import { FitnessCards } from '../Components/Home/FitnessCards';
import { AboutVideoComponent } from '../Components/Home/AboutVideoComponent';
import { MapComponent } from '../Components/Home/MapComponent';
import { Trainers } from '../Components/Home/Trainers';
import { PricingSection } from '../Components/Home/PricingSection';
import { Footer } from '../Components/Common/Footer';
import { HeroContent } from '../Components/Home/HeroContent';
import { WhatsAppBtn } from '../Components/Common/Icons/WhatsAppBtn';
import StrongTrainingLogo2 from '../Components/Home/StrongTrainingLogo2';
import '../Components/Home/CircularText.css';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Strong Training | Entrenamiento Personalizado en Escobar</title>
                <meta
                    name="description"
                    content="Strong Training es un gimnasio en Escobar especializado en entrenamiento personalizado, fuerza e hipertrofia. Sumate hoy."
                />
                <link
                    rel="canonical"
                    href="https://strongtraining.com.ar/"
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

                <main className="pt-20 sm:pt-24">
                    {/* HERO */}
                    <section className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-8 lg:gap-12 min-h-[calc(100vh-5rem)]">
                        {/* Texto Hero */}
                        <div className="flex-1 w-full lg:w-1/2 order-1 lg:order-1">
                            <h1 className="sr-only">Entrenamiento Personalizado en Escobar - Strong Training</h1>
                            <HeroContent
                                prefix="TRANSFORMA"
                                highlight="TU CUERPO"
                                suffix="CON"
                                highlight2="NOSOTROS"
                                description="Alcanza tus objetivos con el mejor equipo de entrenadores en Escobar"
                            />
                            <Link className="flex justify-center lg:justify-start mt-6"
                                to="/contacto">
                                <ButtonGtStrt txt="Inicia con nosotros" />
                            </Link>
                        </div>

                        {/* Logo Circular */}
                        <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-2 py-8 lg:py-0">
                            <div className="w-full max-w-[165px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[330px] mx-auto">
                                <StrongTrainingLogo2
                                    segments={[
                                        { text: "STRONG*", color: "#FF8C00" },
                                        { text: "TRAI", color: "#FFFFFF" },
                                        { text: "NING*", color: "#FF8C00" },
                                        { text: "GYM*", color: "#FFFFFF" },
                                    ]}
                                    onHover="speedUp"
                                    spinDuration={25}
                                />
                            </div>
                        </div>
                    </section>

                    {/* SERVICIOS */}
                    <section className="mt-12 sm:mt-16">
                        <FitnessCards />
                    </section>

                    {/* SOBRE NOSOTROS */}
                    <section className="mt-12 sm:mt-16 md:mt-20 px-4 md:px-8">
                        <div className="max-w-4xl mx-auto">
                            <AboutVideoComponent />
                        </div>
                    </section>

                    {/* ENTRENADORES */}
                    <section className="mt-12 sm:mt-16 md:mt-20">
                        <Trainers />
                    </section>

                    {/* PRECIOS */}
                    <section className="mt-12 sm:mt-16 md:mt-20">
                        <PricingSection />
                    </section>

                    {/* MAPA */}
                    <section className="relative mt-12 sm:mt-16 md:mt-20 px-4 md:px-8 pb-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>

                        <div className="mb-6 text-center relative">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                Sos bienvenido a <span className="text-[#FF8C00]">Unirte</span>
                            </h2>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="w-full max-w-7xl rounded-3xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30">
                                <MapComponent />
                            </div>
                        </div>
                    </section>

                    <WhatsAppBtn />
                    <Footer />
                </main>
            </div>
        </>
    );
};