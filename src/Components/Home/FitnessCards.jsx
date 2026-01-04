import CardShape1 from "../Common/CardShape1"
import CardShape2 from "../Common/CardShape2"
import CardShape3 from "../Common/CardShape3"

import Dieta from '../../assets/dieta.svg'
import Bicep from '../../assets/bicep.svg'
import Spinning from '../../assets/spinning.svg'

export const FitnessCards = () => {
    const cards = [
        {
            icon: Spinning,
            title: "Spinning",
            CardComponent: CardShape2
        },
        {
            icon: Bicep,
            title: "Entrenamiento Personalizado",
            CardComponent: CardShape1
        },
        {
            icon: Dieta,
            title: "Guía de alimentación",
            CardComponent: CardShape3
        }
    ]

    return (
        <div className="w-full px-4 overflow-hidden">
            {/* Versión Desktop - Cards con formas SVG */}
            <div className="hidden lg:flex h-120 flex-row max-w-6xl mx-auto items-center justify-center">
                {cards.map((card, index) => {
                    const Component = card.CardComponent;
                    return (
                        <div key={index} className="flex-1 max-w-sm">
                            <Component
                                icon={card.icon}
                                title={card.title}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Versión Mobile/Tablet - Cards simplificadas */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {cards.map((card, index) => (
                    <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[240px] hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-center mb-4">
                            <img src={card.icon} alt={card.title} className="w-28 h-28" />
                        </div>
                        <h1 className="text-white font-bold text-base text-center">
                            {card.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}