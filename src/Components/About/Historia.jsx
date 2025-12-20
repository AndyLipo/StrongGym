import { AboutContent } from "./AboutContent"
import { Card3D } from "./Card3D"

export const Historia = () => {
    const { AboutHist } = AboutContent
    return (
        <>
            <section className="flex justify-center mt-10 px-4">
                <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-wider text-center'>
                    <h1 className="text-white">
                        {AboutHist.tit} <span className='text-[var(--color-primary)]'>{AboutHist.subtit}</span>
                    </h1>
                </div>
            </section>
            <section className="mt-12 sm:mt-16 md:mt-20 flex flex-col lg:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
                <Card3D intensity={15} className="w-full lg:flex-1 lg:max-w-lg mb-6 lg:mb-10">
                    <div className="rounded-xl shadow-xl overflow-hidden">
                        <img
                            src={AboutHist.imgGym}
                            alt="Gimnasio Strong Training"
                            className="w-full h-48 sm:h-56 md:h-64 object-cover"
                            style={{ transform: 'translateZ(30px)' }}
                        />
                    </div>
                </Card3D>
                <div className="w-full lg:flex-1">
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                        Somos un gimnasio familiar con más de 5 años transformando vidas en Belén de Escobar. Ubicados en Juan P. Asborno 1650, nos dedicamos a forjar vínculos genuinos mientras ayudamos a nuestros miembros a alcanzar sus metas.
                        Más que un espacio de entrenamiento, somos una comunidad donde cada persona encuentra el apoyo necesario para transformar su estilo de vida, construir rutinas saludables y desarrollar hábitos que perduran en el tiempo.
                        Nuestro equipo de profesionales capacitados te acompaña personalmente en cada etapa de tu viaje fitness, adaptándose a tus necesidades y objetivos individuales. Aquí no sos un número más: sos parte de nuestra familia, y tu progreso es nuestro compromiso.
                        Creemos que el verdadero cambio va más allá del gimnasio. Por eso trabajamos contigo de manera integral, ayudándote a construir la mejor versión de vos mismo, paso a paso, día a día.
                    </p>
                </div>
            </section>
        </>
    )
}