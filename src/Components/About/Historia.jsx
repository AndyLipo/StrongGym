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
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, porro totam. Quos doloribus perspiciatis eos laboriosam, maxime accusamus itaque distinctio qui eligendi earum totam? Accusamus maiores voluptate laboriosam consequuntur. Quia!
                    </p>
                </div>
            </section>
        </>
    )
}