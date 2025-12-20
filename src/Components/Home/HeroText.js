import imgAbout from '../../assets/imgAbout.webp'
import ImgMartin from '../../assets/MartinFinal.webp'
import ImgMirta from '../../assets/MirtaEntrenadora2.webp'
import ImgClaudio from '../../assets/ClaudioEntrenador2.webp'


export const HeroText = {
    content: {
        mainTitle: {
            prefix: "Esculpe tu",
            highlight: "cuerpo ideal",
            suffix: "con",
            highlight2: "Ejercicio",
        },
        description: "Más que un gimnasio, somos tu compañero en el viaje hacia una vida más saludable y activa. Aquí forjarás no solo músculos, sino también determinación, autoestima y hábitos que durarán toda la vida. ¿Estás listo para el desafío?",

        imgAbout: imgAbout,

        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores eveniet vitae dolorem vero, dolorum consequuntur natus. Quasi, maiores. Quidem temporibus mollitia placeat natus, rerum modi iure ab quo adipisci!",

        // Datos de contacto
        contact: {
            email: "strongtraining.arg@gmail.com",
            phone: "+54 9 3484378204",
            address: {
                street: "Juan P. Asborno 1650",
                city: "Belen de Escobar"
            },
        },

        // Configuraciones de sección
        sections: {
            aboutUs: {
                title: "Sobre Nosotros",
                subtitle: "Conoce nuestra historia",
                description: "Somos un gimnasio familiar con más de 5 años forjando vínculos y transformando vidas. Nuestro ambiente acogedor y personal capacitado te acompañan en cada paso de tu viaje fitness, creciendo juntos como una gran familia.",
                showVideo: true,
                showText: true
            }
        },
        pricing: {
            title: "Membresia",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            // Planes sin entrenador
            withoutTrainer: [
                {
                    plan: "Diario",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $15.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Uso de equipos básicos",
                        "Acceso por 1 día"
                    ]
                },
                {
                    plan: "Semanal",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $60.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Uso de equipos básicos",
                        "Acceso por 1 semana",
                        "Clases grupales incluidas"
                    ],
                    isPopular: true
                },
                {
                    plan: "Mensual",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $150.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Uso de equipos básicos",
                        "Acceso por 1 mes",
                        "Clases grupales incluidas",
                        "Plan nutricional básico"
                    ]
                }
            ],

            // Planes con entrenador
            withTrainer: [
                {
                    plan: "Diario",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $25.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Entrenador personal incluido",
                        "Rutina personalizada",
                        "Acceso por 1 día"
                    ]
                },
                {
                    plan: "Semanal",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $120.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Entrenador personal incluido",
                        "Rutina personalizada",
                        "Seguimiento semanal",
                        "Clases grupales incluidas"
                    ],
                    isPopular: true
                },
                {
                    plan: "Mensual",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus interdum nunc, et eleifend neque sagittis et. Donec dignissim quam eu aliquet fermentum.",
                    price: "Ars $300.000",
                    features: [
                        "Acceso completo al gimnasio",
                        "Entrenador personal dedicado",
                        "Rutina personalizada",
                        "Seguimiento diario",
                        "Plan nutricional completo",
                        "Evaluaciones semanales"
                    ]
                }
            ]
        },
        successStories: {
            title: "Testimonio de vida",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            description: "Vestibulum faucibus interdum nunc, et eleifend neque sagittis et.",
            stories: [
                {
                    id: 1,
                    name: "Derek",
                    image: "/path/to/derek.jpg", // Ruta real de tu imagen
                    rating: 5,
                    testimonial: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Faucibus"
                },
                {
                    id: 2,
                    name: "Juan",
                    image: "/path/to/anthony.jpg",
                    rating: 5,
                    testimonial: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Faucibus"
                },
                {
                    id: 3,
                    name: "Maria",
                    image: "/path/to/anthony.jpg",
                    rating: 5,
                    testimonial: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Faucibus"
                },
                {
                    id: 4,
                    name: "Rocio",
                    image: "/path/to/anthony.jpg",
                    rating: 5,
                    testimonial: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Faucibus"
                },
            ]
        }
    },
    Trainers: {
        TrainerTitle: "Nuestros Entrenadores",
        EntrenadorParagraph: "Conoce nuestros profesionales. Su historia y formacion profesional, de que manera te pueden favorecer para transoformar tu cuerpo y calidad de vida",
        ImgTrain: [
            {
                id: 1,
                name: "Mirta Alvez",
                image: ImgMirta,
            },
            {
                id: 2,
                name: "Martin Oyhanart",
                image: ImgMartin,
            },
            {
                id: 3,
                name: "Claudio Rodriguez",
                image: ImgClaudio,
            },
        ]
    },
    PrincingPlans: {
        title: "Planes de Precios",
        subtitle: "Elige el plan perfecto para ti",
        amenities: [
            {
                plan: 'Salón',
                description: 'Perfecto para empezar',
                price: '$ Consultar',
                features: ['Acceso al gimnasio', 'Orientación de profesionales', 'Baños'],
                isPopular: false
            },
            {
                plan: 'Con Entrenador',
                description: 'Lo más recomendado',
                price: '$ Consultar',
                features: ['Todo el plan Salón', 'Entrenador personal', 'Plan personalizado', 'Seguimiento', 'Nutrición'],
                isPopular: true
            }
        ]
    },
    SuccessStories: {
        title: "Historias de",
        highlight: "Éxito",
        subtitle: "Testimonios reales de nuestros miembros",
        stories: [
            // {
            //     id: 1,
            //     name: 'María García',
            //     rating: 5,
            //     testimonial: 'Increíble transformación en 3 meses',
            //     image: , // Para cuando quieras agregar imágenes reales
            //     alt: 'Imagen testimonio Maria Garcia'
            // },
            // {
            //     id: 2,
            //     name: 'Juan Pérez',
            //     rating: 5,
            //     testimonial: 'Los mejores entrenadores que he tenido',
            //     image: ImgJuan,
            //     alt: 'Imagen testimonio Juan Pérez'
            // },
            // {
            //     id: 3,
            //     name: 'Ana López',
            //     rating: 4,
            //     testimonial: 'Excelente ambiente y equipamiento',
            //     image: '/path/to/ana.jpg',
            //     alt: 'Imagen testimonio Ana López'
            // },
            // {
            //     id: 4,
            //     name: 'Carlos Ruiz',
            //     rating: 5,
            //     testimonial: 'Cambió completamente mi vida',
            //     image: '/path/to/carlos.jpg',
            //     alt: 'Imagen testimonio Carlos Ruiz'
            // }
        ]
    }
}
