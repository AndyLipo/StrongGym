import { AboutContent } from "./AboutContent"
import { Card3D } from "./Card3D"

export const Historia = () => {
    const { AboutHist } = AboutContent
    return (
        <>
            <section className="flex justify-center mt-10 ">
                <div className='text-7xl sm:text-5xl md:text-8xl font-bold uppercase tracking-widest'>
                    <h1>{AboutHist.tit} <span className='text-[var(--color-primary)]'>{AboutHist.subtit}</span></h1>
                </div>
            </section>
            <section className="mt-20 flex gap-8 px-5">
                <Card3D intensity={15} className="flex-1 max-w-lg ml-3 mb-10">
                    <div className="rounded-xl shadow-xl overflow-hidden">
                        <img
                            src={AboutHist.imgGym}
                            alt="Gimnasio Strong Training"
                            className="w-full h-64 object-cover"
                            style={{ transform: 'translateZ(30px)' }}
                        />
                    </div>
                </Card3D>
                <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, porro totam. Quos doloribus perspiciatis eos laboriosam, maxime accusamus itaque distinctio qui eligendi earum totam? Accusamus maiores voluptate laboriosam consequuntur. Quia!
                    </p>
                </div>
            </section>
        </>
    )
}
