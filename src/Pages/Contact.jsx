import { Header } from '../Components/Common/Header'
import { ContactoForm } from '../Components/Contact/ContactoForm'
import { HeroContact } from '../Components/Contact/HeroContact'
import { Horarios } from '../Components/Contact/Horarios'
import { InfoContacto } from '../Components/Contact/InfoContacto'

export const Contact = () => {
    return (
        <>
            <div className='bg-gradient-to-t from-gray-100 to-zinc-900/95 text-white min-h-screen'>
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
                    </div>
                </div>
            </div>
        </>
    )
}