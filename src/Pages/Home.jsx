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
import { Footer } from '../Components/Common/Footer'
import { HeroContent } from '../Components/Home/HeroContent'
export const Home = () => {
    return (
        <div className='bg-gradient-to-t from-gray-100 to-zinc-900/95 text-white min-h-screen'>
            <div className="flex flex-col">
                <nav className="flex justify-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-zinc-900/80 w-full max-w-full overflow-x-hidden">
                    <Header />
                </nav>

                <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 mt-20 sm:mt-24'>
                    <HeroContent
                        prefix="TRANSFORMA"
                        highlight="TU CUERPO"
                        suffix="CON"
                        highlight2="NOSOTROS"
                        description="Alcanza tus objetivos con el mejor equipo de entrenadores"
                    />
                    <div className="flex justify-center px-4">
                        <ButtonGtStrt txt="Get Started" />
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 md:mt-24">
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

                <section className="mt-12 sm:mt-16 md:mt-20">
                    <PricingSection />
                </section>

                <section className="mt-12 sm:mt-16 md:mt-20">
                    <SuccessStories />
                </section>

                <section className="mt-12 sm:mt-16 md:mt-20 px-4 md:px-8">
                    <div className="mb-6 sm:mb-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">
                            Sos bienvenido a <span className="text-[#FF8C00]">Unirnos!</span>
                        </h2>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className='w-full max-w-7xl rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30'>
                            <MapComponent />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}