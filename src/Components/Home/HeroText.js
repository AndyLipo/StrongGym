import imgAbout from '../../assets/imgAbout.webp'
import Martin from '../../assets/Martin.jpg'
import Mirta from '../../assets/Mirta.jpg'

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
            socialMedia: [
                { name: "Twitter", icon: "T", url: "#" },
                { name: "YouTube", icon: "Y", url: "#" },
                { name: "Facebook", icon: "F", url: "#" },
                { name: "TikTok", icon: "T", url: "#" },
                { name: "Instagram", icon: "I", url: "#" }
            ]
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

        //Imagenes para entrenadores
        Images: {
            ImgEntrenador1: Martin,
            ImgEntrenador2: Mirta
        }
    }
}