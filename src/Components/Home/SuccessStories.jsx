import { HeroText } from '../Home/HeroText'; // Ajusta según tu estructura de carpetas

export const SuccessStories = () => {
    const { successStories } = HeroText.content;

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < rating
                    ? 'fill-orange-500 text-orange-500'
                    : 'fill-gray-600 text-gray-600'
                    }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ));
    };

    return (
        <div className="relative w-full min-h-screen bg-zinc-900 overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>

            {/* Sección naranja con clip-path */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-orange-500 to-orange-600"
                style={{
                    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'
                }}
            ></div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {successStories.title.split('Success').map((part, index) => (
                            <span key={index}>
                                {part}
                                {index === 0 && (
                                    <span className="text-orange-500">Success</span>
                                )}
                            </span>
                        ))}
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-2">
                        {successStories.subtitle}
                    </p>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        {successStories.description}
                    </p>
                </div>

                {/* Grid de testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {successStories.stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Imagen */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Nombre en la imagen */}
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-white font-bold text-xl">
                                        {story.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {renderStars(story.rating)}
                                </div>

                                {/* Testimonial */}
                                <div className="relative">
                                    <svg
                                        className="w-6 h-6 text-orange-500 mb-3 opacity-70"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        {story.testimonial}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Efectos de luz adicionales */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
    );
};