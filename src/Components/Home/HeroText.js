import imgAbout from '../../assets/imgAbout.webp'

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
    }
}