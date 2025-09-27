import { Entrenadores } from "../Components/About/Entrenadores"
import { HeroVideo } from "../Components/About/HeroVideo"
import { Historia } from "../Components/About/Historia"
import { Instalaciones } from "../Components/About/Instalaciones"
import { Logros } from "../Components/About/Logros"
import { Testimonio } from "../Components/About/Testimonio"
import { Header } from "../Components/Common/Header"

export const About = () => {
    return (
        <>
            <div className='bg-linear-to-t from-gray-100 to-zinc-900/95 to-80% text-white'>
                <div className="flex flex-col">
                    <nav className="flex justify-center fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
                        <Header />
                    </nav>
                </div>
                <section>
                    <HeroVideo />
                </section>
                <section>
                    <Historia />
                </section>
                <section>
                    <Entrenadores />
                </section>
                <section>
                    <Instalaciones />
                </section>
                <section>
                    <Testimonio />
                </section>
                <section>
                    <Logros />
                </section>
            </div>
        </>
    )
}
