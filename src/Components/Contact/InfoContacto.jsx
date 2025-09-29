import { Señalador } from '../Common/Señalador'
import { CardContacto } from './CardContacto'

export const InfoContacto = () => {
    return (
        <>
            <section>
                <section className="py-16">
                    <div className="">
                        {/* Señalador */}
                        <div className="mb-6 text-center mx-auto">
                            <Señalador numero="1 " text="Información" className="inline-block" />
                        </div>
                    </div>
                </section>
                <section>
                    {/* Aquí irá el contenido de información de contacto */}
                    <div className="">
                        <div>
                            <CardContacto />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}