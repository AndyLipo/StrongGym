import { PricingCard } from '../Common/PricingCard';
import { HeroText } from './HeroText';

export const PricingSection = () => {
    return (
        <div className="w-full px-4 md:px-8 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {HeroText.PrincingPlans.title}
                    </h1>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        {HeroText.PrincingPlans.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {HeroText.PrincingPlans.amenities.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};