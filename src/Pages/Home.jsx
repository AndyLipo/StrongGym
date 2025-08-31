import { ButtonGtStrt } from '../Components/Common/ButtonGtStrt'
import { Header } from '../Components/Common/Header'
import { FitnessCards } from '../Components/Home/FitnessCards'
import { HeroSection } from '../Components/Home/HeroSection'

export const Home = () => {
    return (
        <>
            <div className='bg-linear-to-t from-gray-100 to-zinc-900/95 to-80% text-white'>
                <div className="flex flex-col gap-0 sm:gap-8 md:gap-18 lg:gap-18 ">
                    <nav className="flex justify-center sticky top-0">
                        <Header />
                    </nav>
                    <div className='sm:gap-8 md:gap-18 lg:gap-18'>
                        <HeroSection />
                        <ButtonGtStrt txt="Get Started" />
                        <div className="min-h-screen">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-white mb-4">Transform Your</h1>
                                <h2 className="text-4xl font-bold text-yellow-400 mb-8">BODY SHAPE</h2>
                                <h3 className="text-4xl font-bold text-white mb-4">WITH</h3>
                                <h4 className="text-4xl font-bold text-yellow-400 mb-12">FITNESS</h4>
                            </div>

                            <FitnessCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
