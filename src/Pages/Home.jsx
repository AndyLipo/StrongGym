// Home.jsx - Página principal actualizada
import { ButtonGtStrt } from '../Components/Common/ButtonGtStrt'
import { ContainerAb } from '../Components/Common/ContainerAb'
import { Header } from '../Components/Common/Header'
import { FitnessCards } from '../Components/Home/FitnessCards'
import { HeroSection } from '../Components/Home/HeroSection'
import { AboutVideoComponent } from '../Components/Home/AboutVideoComponent'
import { MapComponent } from '../Components/Home/MapComponent'
import { HeroText } from '../Components/Home/HeroText'
import { Trainers } from '../Components/Home/Trainers'
import { PricingSection } from '../Components/Home/PricingSection'
import { SuccessStories } from '../Components/Home/SuccessStories'

export const Home = ({ heroData }) => {
    const { content } = HeroText;

    return (
        <>
            <div className='bg-linear-to-t from-gray-100 to-zinc-900/95 to-80% text-white'>
                <div className="flex flex-col">
                    <nav className="flex justify-center fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
                        <Header />
                    </nav>

                    {/* Sección Hero con botón */}
                    <div className='flex flex-col gap-8 md:gap-12 lg:gap-16 mt-20'>
                        <HeroSection heroData={heroData} />
                        <ButtonGtStrt txt="Get Started" />
                    </div>

                    {/* Espaciado entre secciones principales */}
                    <div className="mt-16 md:mt-24 lg:mt-32">
                        <FitnessCards />
                    </div>

                    {/* About Us Section - Video */}
                    <section className="mt-20 md:mt-28 lg:mt-70 px-4 md:px-8 lg:px-20">

                        {/* Video con botón superpuesto */}
                        <ContainerAb className="mb-8">
                            <AboutVideoComponent>
                                <div className="absolute bottom-50 space-y-4 -left-150">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                        {content.sections.aboutUs.title}
                                    </h2>
                                    <p className="text-lg text-zinc-300 max-w-xl">
                                        {content.sections.aboutUs.subtitle}
                                    </p>
                                    <p className="text-zinc-300 leading-relaxed max-w-sm">
                                        {content.sections.aboutUs.description}
                                    </p>
                                </div>
                                <a className='relative bottom-20 right-150'>
                                    <ButtonGtStrt txt="Conoce más" />
                                </a>
                            </AboutVideoComponent>
                        </ContainerAb>
                    </section>
                    {/* Entrenadores */}
                    <section className='max-h-fit mt-40'>
                        <Trainers />
                    </section>
                    {/* Planes de pago */}
                    <section>
                        <PricingSection />
                    </section>
                    <section >
                        <SuccessStories />
                    </section>
                    {/* Contact Section - Mapa */}
                    <section className="mt-20 md:mt-28 lg:mt-70 px-4 md:px-8">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                                Sos bienvenido a <span className="text-3xl md:text-4xl font-bold mb-4 text-[#FF8C00]">Unirtenos!</span>
                            </h2>
                        </div>

                        {/* Contenedor personalizado solo para el mapa */}
                        <div className="flex justify-center items-center">
                            <div className='w-full max-w-7xl rounded-4xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30'>
                                <MapComponent contactData={content.contact} />
                            </div>
                        </div>
                    </section>

                    {/* Espaciado final */}
                    <div className="h-20"></div>
                    <footer className='bg-black py-8'>
                        <p className='text-white flex justify-center items-center'>2025 All right reserved</p>
                    </footer>
                </div>
            </div>
        </>
    )
}