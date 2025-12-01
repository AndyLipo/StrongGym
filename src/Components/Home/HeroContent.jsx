export const HeroContent = ({ prefix, highlight, suffix, description, highlight2 }) => {
    return (
        <div className='px-4 md:px-8 text-center md:text-left'>
            <div className='font-bold uppercase tracking-wider'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-white mb-2'>
                    {prefix}
                </p>
                <p className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-[#FF8C00] mb-2'>
                    {highlight}
                </p>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white'>
                    {suffix}{' '}
                    <span className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-[#FF8C00]'>
                        {highlight2}
                    </span>
                </p>
            </div>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-md lg:max-w-xl mt-6 md:mt-8 mx-auto md:mx-0">
                {description}
            </p>
        </div>
    );
};