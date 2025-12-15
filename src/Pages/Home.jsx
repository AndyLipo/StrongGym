import { ButtonGtStrt } from '../Components/Common/ButtonGtStrt'
import { Header } from '../Components/Common/Header'
import { FitnessCards } from '../Components/Home/FitnessCards'
import { AboutVideoComponent } from '../Components/Home/AboutVideoComponent'
import { MapComponent } from '../Components/Home/MapComponent'
import { Trainers } from '../Components/Home/Trainers'
import { PricingSection } from '../Components/Home/PricingSection'
import { SuccessStories } from '../Components/Home/SuccessStories'
import { Footer } from '../Components/Common/Footer'
import { HeroContent } from '../Components/Home/HeroContent'
import StrongTrainingLogo from '../Components/Common/StrongTrainingLogo'
import { WhatsAppBtn } from '../Components/Common/Icons/WhatsAppBtn'

export const Home = () => {
    return (
        <div className='bg-gradient-to-br from-black via-zinc-900 to-zinc-700 text-white min-h-screen'>
            <div className="flex flex-col">
                <nav className="flex justify-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-zinc-900/80 w-full">
                    <Header />
                </nav>

                <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 mt-20 sm:mt-24'>
                    {/* Hero Section con Logo y Contenido en paralelo */}
                    <div className='flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-8 lg:gap-12'>
                        {/* Contenido a la izquierda */}
                        <div className='flex-1 w-full lg:w-1/2'>
                            <HeroContent
                                prefix="TRANSFORMA"
                                highlight="TU CUERPO"
                                suffix="CON"
                                highlight2="NOSOTROS"
                                description="Alcanza tus objetivos con el mejor equipo de entrenadores"
                            />
                            <div className="flex justify-center lg:justify-start mt-6">
                                <ButtonGtStrt txt="Inicia con nosotros" />
                            </div>
                        </div>

                        {/* Logo a la derecha */}
                        <div className='flex-1 w-full lg:w-1/2 flex items-center justify-center'>
                            <StrongTrainingLogo />
                        </div>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 md:mt-10">
                    <FitnessCards />
                </div>

                <section className="mt-12 sm:mt-16 md:mt-20 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <AboutVideoComponent />
                    </div>
                </section>

                <section className='mt-12 sm:mt-16 md:mt-20'>
                    <Trainers />
                </section>

                <section className="mt-25 sm:mt-16 md:mt-20">
                    <PricingSection />
                </section>

                {/* <section className="mt-12 sm:mt-16 md:mt-20">
                    <SuccessStories />
                </section> */}

                <section className="relative mt-12 sm:mt-16 md:mt-20 px-4 md:px-8 pb-12">
                    {/* Fondo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
                    <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-orange-500 to-orange-600"
                        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}>
                    </div>
                    <div className="mb-6 sm:mb-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                            Sos bienvenido a <span className="text-[#FF8C00]">Unirte!</span>
                        </h2>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className='w-full max-w-7xl rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30'>
                            <MapComponent />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <WhatsAppBtn />
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}