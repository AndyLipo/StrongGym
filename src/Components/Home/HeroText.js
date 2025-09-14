import imgAbout from '../../assets/imgAbout.webp'

export const HeroText = {
    content: {
        mainTitle: {
            prefix: "build your",
            highlight: "body shapes",
            suffix: "with",
            highlight2: "fitness",
        },
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, animi delectus ea quidem commodiss dolorem sequi, minima mollitia earum dicta, deleniti architecto voluptate nemo rem? Quas esse ratione eaque explicabo!",

        imgAbout: imgAbout,

        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores eveniet vitae dolorem vero, dolorum consequuntur natus. Quasi, maiores. Quidem temporibus mollitia placeat natus, rerum modi iure ab quo adipisci!",

        // Datos de contacto
        contact: {
            email: "LPGFITNESS@FITNESS.COM",
            phone: "+6289988772233",
            address: {
                street: "K.H. Ahmad Dahlan, 44",
                city: "Bandar Lampung"
            },
        },

        // Configuraciones de sección
        sections: {
            aboutUs: {
                title: "About Us",
                subtitle: "Conoce nuestra historia",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores eveniet vitae dolorem vero, dolorum consequuntur natus.",
                showVideo: true,
                showText: true
            },
            contact: {
                title: "Contacto",
                subtitle: "Visitanos o contactanos",
                description: "Encuentra nuestra ubicación y ponte en contacto con nosotros.",
                showMap: true,
                showContactInfo: true
            }
        },
        pricing: {
            title: "Membership Pricing",
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
            title: "Member's Success Story",
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
                    name: "Anthony",
                    image: "/path/to/anthony.jpg",
                    rating: 5,
                    testimonial: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Vestibulum Faucibus"
                },
                // ... más historias
            ]
        }
    }
}