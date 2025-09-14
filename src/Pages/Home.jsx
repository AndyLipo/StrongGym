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
                                        {content.about}
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
                    <section>
                        <SuccessStories />
                    </section>
                    {/* Contact Section - Mapa */}
                    <section className="mt-20 md:mt-28 lg:mt-70 px-4 md:px-8 lg:px-20">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {content.sections.contact.title}
                            </h2>
                            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                                {content.sections.contact.subtitle}
                            </p>
                        </div>

                        <ContainerAb>
                            <MapComponent contactData={content.contact} />
                        </ContainerAb>
                    </section>

                    {/* Espaciado final */}
                    <div className="h-20"></div>
                </div>
            </div>
        </>
    )
}