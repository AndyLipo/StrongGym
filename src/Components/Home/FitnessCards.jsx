import CardShape1 from "../Common/CardShape1"
import CardShape2 from "../Common/CardShape2"
import CardShape3 from "../Common/CardShape3"

import Dieta from '../../assets/dieta.svg'
import Pesas from '../../assets/bicep.svg'

export const FitnessCards = () => {
    const cards = [
        {
            icon: "🏋️",
            title: "WeightLifting",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Faucibus Interdum",
            CardComponent: CardShape2 // izquierda - forma inclinada hacia la derecha
        },
        {
            icon: Pesas,
            title: "Private Training",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Faucibus Interdum Nunc, Et Eleifend Neque Sagittis Et",
            CardComponent: CardShape1 // centro - forma trapezoidal
        },
        {
            icon: Dieta,
            title: "Build Muscle",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vestibulum Faucibus Interdum",
            CardComponent: CardShape3 // derecha - forma inclinada hacia la izquierda
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 items-center justify-center">
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