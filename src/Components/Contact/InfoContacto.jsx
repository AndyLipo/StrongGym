import { Señalador } from '../Common/Señalador'
import { CardContacto } from './CardContacto'

export const InfoContacto = () => {
    return (
        <section className=" py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
                {/* Señalador */}
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <Señalador numero="1" text="Información" />
                </div>

                {/* Contenido */}
                <div className="mt-6 sm:mt-8">
                    <CardContacto />
                </div>
            </div>
        </section>
    )
}