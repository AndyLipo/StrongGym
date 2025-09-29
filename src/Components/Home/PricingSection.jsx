import { useState } from 'react';
import { PricingCard } from '../Common/PricingCard';

export const PricingSection = () => {
    const [activeTab, setActiveTab] = useState('without');

    const pricingPlans = {
        without: [
            {
                plan: 'Básico',
                description: 'Perfecto para empezar',
                price: '$29/mes',
                features: ['Acceso al gimnasio', 'Clases grupales', 'Vestuarios'],
                isPopular: false
            },
            {
                plan: 'Premium',
                description: 'Lo más popular',
                price: '$49/mes',
                features: ['Todo en Básico', 'Clases especiales', 'Nutrición básica', 'App móvil'],
                isPopular: true
            },
            {
                plan: 'Elite',
                description: 'Experiencia completa',
                price: '$79/mes',
                features: ['Todo en Premium', 'Acceso 24/7', 'Eventos exclusivos', 'Masajes'],
                isPopular: false
            }
        ],
        with: [
            {
                plan: 'Personal',
                description: 'Con entrenador dedicado',
                price: '$99/mes',
                features: ['Todo en Premium', '2 sesiones/semana', 'Plan personalizado'],
                isPopular: false
            },
            {
                plan: 'Pro',
                description: 'Máximo rendimiento',
                price: '$149/mes',
                features: ['Todo en Personal', '4 sesiones/semana', 'Seguimiento diario', 'Nutrición Pro'],
                isPopular: true
            },
            {
                plan: 'VIP',
                description: 'Servicio premium',
                price: '$249/mes',
                features: ['Todo en Pro', 'Ilimitadas sesiones', 'Chef personal', 'Spa incluido'],
                isPopular: false
            }
        ]
    };

    return (
        <div className="w-full px-4 md:px-8 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        Planes de Precios
                    </h1>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Elige el plan perfecto para ti
                    </p>
                </div>

                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="bg-zinc-800 rounded-full p-1 sm:p-2 inline-flex">
                        <button
                            onClick={() => setActiveTab('without')}
                            className={`
                                px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-base
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
                                px-4 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-base
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {pricingPlans[activeTab].map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};