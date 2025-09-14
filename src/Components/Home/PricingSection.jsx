import { useState } from 'react';
import { PricingCard } from '../Common/PricingCard';
import { HeroText } from '../Home/HeroText'; // Ajusta según tu estructura de carpetas

export const PricingSection = () => {
    const [activeTab, setActiveTab] = useState('without'); // 'without' o 'with'

    // Obtener datos desde HeroText
    const { pricing } = HeroText.content;

    const pricingPlans = {
        without: pricing.withoutTrainer,
        with: pricing.withTrainer
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-white mb-6">
                    {pricing.title}
                </h1>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                    {pricing.subtitle}
                </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-zinc-800 rounded-full p-2 inline-flex">
                    <button
                        onClick={() => setActiveTab('without')}
                        className={`
                            px-8 py-3 rounded-full font-medium transition-all duration-300
                            ${activeTab === 'without'
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'text-zinc-400 hover:text-white'
                            }
                        `}
                    >
                        Sin Entrenador
                    </button>
                    <button
                        onClick={() => setActiveTab('with')}
                        className={`
                            px-8 py-3 rounded-full font-medium transition-all duration-300
                            ${activeTab === 'with'
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'text-zinc-400 hover:text-white'
                            }
                        `}
                    >
                        Con Entrenador
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingPlans[activeTab].map((plan, index) => (
                    <PricingCard
                        key={`${activeTab}-${index}`}
                        plan={plan.plan}
                        description={plan.description}
                        price={plan.price}
                        features={plan.features}
                        isPopular={plan.isPopular}
                        buttonText="Join Now"
                    />
                ))}
            </div>
        </div>
    );
};