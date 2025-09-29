// Components/Common/PricingCard.jsx
import { ButtonGtStrt } from './ButtonGtStrt';

// export const PricingCard = ({
//     plan,
//     description,
//     price,
//     features = [],
//     isPopular = false,
// }) => {
//     return (
//         <div className={`
//             relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 
//             rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:bg-zinc-800/80
//             ${isPopular ? 'ring-2 ring-orange-500/50 shadow-2xl shadow-orange-500/20' : ''}
//         `}>
//             {/* Badge de plan popular (opcional) */}
//             {isPopular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                         Más Popular
//                     </span>
//                 </div>
//             )}

//             {/* Header del plan */}
//             <div className="text-center mb-6">
//                 <div className="inline-block bg-black rounded-full px-6 py-3 mb-6">
//                     <h3 className="text-white font-semibold text-lg">{plan}</h3>
//                 </div>

//                 {/* Descripción */}
//                 <p className="text-zinc-400 text-sm leading-relaxed mb-6">
//                     {description}
//                 </p>

//                 {/* Precio */}
//                 <div className="mb-6">
//                     <h2 className="text-white text-4xl font-bold">{price}</h2>
//                     <div className="w-full h-px bg-zinc-600 mt-4"></div>
//                 </div>
//             </div>

//             {/* Lista de características */}
//             <div className="space-y-4 mb-8">
//                 {features.map((feature, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                         <svg
//                             className="w-5 h-5 text-green-400 flex-shrink-0"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 13l4 4L19 7"
//                             />
//                         </svg>
//                         <span className="text-zinc-300 text-sm">{feature}</span>
//                     </div>
//                 ))}
//             </div>

//             {/* Botón de acción */}
//             <div className="pt-4">
//                 <ButtonGtStrt
//                     txt="Unete Ahora"
//                     className="w-full justify-center"
//                 />
//             </div>
//         </div>
//     );
// };
export const PricingCard = ({ plan, description, price, features, isPopular }) => {
    return (
        <div className={`
            relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 
            rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:bg-zinc-800/80
            ${isPopular ? 'ring-2 ring-orange-500/50 shadow-2xl shadow-orange-500/20' : ''}
        `}>
            {isPopular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                        Más Popular
                    </span>
                </div>
            )}

            <div className="text-center mb-6">
                <div className="inline-block bg-black rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                    <h3 className="text-white font-semibold text-base sm:text-lg">{plan}</h3>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {description}
                </p>

                <div className="mb-4 sm:mb-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">{price}</h2>
                    <div className="w-full h-px bg-zinc-600 mt-4"></div>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="text-zinc-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="pt-4">
                <ButtonGtStrt txt="Únete Ahora" />
            </div>
        </div>
    );
};