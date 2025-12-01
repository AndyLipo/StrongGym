import { HeroText } from './HeroText';

export const SuccessStories = () => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'fill-orange-500' : 'fill-gray-600'}`}
                viewBox="0 0 24 24"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ));
    };

    return (
        <div className="relative w-full bg-zinc-900 py-12 md:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>

            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-orange-500 to-orange-600"
                style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)' }}>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-start mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        {HeroText.SuccessStories.title} <span className="text-orange-500">{HeroText.SuccessStories.highlight}</span>
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl">
                        {HeroText.SuccessStories.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {HeroText.SuccessStories.stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative h-48 sm:h-56 md:h-64 bg-gray-700 overflow-hidden">
                                <picture>
                                    <source srcSet={story.image} type="image/webp" />
                                    <img
                                        src={story.image}
                                        alt={story.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </picture>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white font-bold text-lg sm:text-xl">
                                        {story.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                                    {renderStars(story.rating)}
                                </div>
                                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                                    "{story.testimonial}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};