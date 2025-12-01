import { Footer } from '../Components/Common/Footer'
import { Header } from '../Components/Common/Header'
import { WhatsAppBtn } from '../Components/Common/Icons/WhatsAppBtn'
import { ContactoForm } from '../Components/Contact/ContactoForm'
import { HeroContact } from '../Components/Contact/HeroContact'
import { Horarios } from '../Components/Contact/Horarios'
import { InfoContacto } from '../Components/Contact/InfoContacto'


export const Contact = () => {
    return (
        <>
            <div className='bg-gradient-to-br from-black via-zinc-900 to-zinc-700 text-white min-h-screen'>
                <div className="flex flex-col">
                    <nav className="flex justify-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-zinc-900/80 w-full">
                        <Header />
                    </nav>

                    {/* Contenido principal con padding-top para compensar header fijo */}
                    <div className="pt-20"> {/* Ajusta según altura de tu header */}
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
                        <section>
                            <div>
                                <WhatsAppBtn />
                            </div>
                        </section>
                        <section>
                            <Footer />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}