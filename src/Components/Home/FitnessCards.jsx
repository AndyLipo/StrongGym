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
            CardComponent: CardShape2 // izquierda - forma inclinada hacia la derecha
        },
        {
            icon: Bicep,
            title: "Entrenamiento Personalizado",
            CardComponent: CardShape1 // centro - forma trapezoidal
        },
        {
            icon: Dieta,
            title: "Dieta",
            CardComponent: CardShape3 // derecha - forma inclinada hacia la izquierda
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto items-center justify-center">
            {cards.map((card, index) => {
                const Component = card.CardComponent;
                return (
                    <div key={index} className="flex-1 max-w-sm">
                        <Component
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                )
            })}
        </div>
    )
}