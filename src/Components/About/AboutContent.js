import VideoDumbell from '../../assets/HeroVideo.mp4' // Ajusta la ruta según tu estructura
import Atras1 from '../../assets/Atras1.webp'
import SalonFoto from '../../assets/SalonFoto.webp'
import Spinnin2 from '../../assets/Spinnin2.webp'
import Spinning from '../../assets/Spinning.webp'
export const AboutContent = {
    heroVideo: VideoDumbell,
    title: "Entrena con Nosotros",
    subtitle: "Descubre el poder de transformar tu cuerpo y mente",
    //Historia
    AboutHist: {
        tit: "nuestra",
        subtit: "historia",
        imgGym: "https://dummyimage.com/500x400/000/fff"
    },
    Entrenadores: {
        titulo: "Conoce a nuestros entrenadores",
        CardEntrenadores: [
            {
                id: 1,
                texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reiciendis repellendus. Totam, nostrum architecto quisquam quos, perferendis culpa voluptate accusantium quasi maxime assumenda temporibus fugit beatae libero est! Excepturi, dolorem?",
                alt: "Foto de Mirta"
            },
            {
                id: 2,
                texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reiciendis repellendus. Totam, nostrum architecto quisquam quos, perferendis culpa voluptate accusantium quasi maxime assumenda temporibus fugit beatae libero est! Excepturi, dolorem?",
                alt: "Foto de Martin"
            },
            {
                id: 3,
                texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, reiciendis repellendus. Totam, nostrum architecto quisquam quos, perferendis culpa voluptate accusantium quasi maxime assumenda temporibus fugit beatae libero est! Excepturi, dolorem?",
                alt: "Foto de Caludio"
            }
        ]
    },
    //Instalaciones
    Instalaciones: {
        InstaTitulo: "Instalaciones",
        Equipamientos: [
            {
                id: 1,
                imagen: Atras1,
                alt: "Instalaciones"
            },
            {
                id: 2,
                imagen: SalonFoto,
                alt: "Instalaciones"
            },
            {
                id: 3,
                imagen: Spinning,
                alt: "Instalaciones"
            },
            {
                id: 4,
                imagen: Spinnin2,
                alt: "Instalaciones"
            },
        ],
        //Testimonio
        Testimonios: [
            {
                id: 1,
                nombre: "Testimonio 1",
                imagen1: "https://dummyimage.com/150x100/000/fff&text=Foto1",
                alt1: "Foto del testimonio 1 - imagen 1",
                imagen2: "https://dummyimage.com/150x100/000/fff&text=Foto2",
                alt2: "Foto del testimonio 1 - imagen 2",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                nombre: "Testimonio 2",
                imagen1: "https://dummyimage.com/150x100/000/fff&text=Foto3",

                imagen2: "https://dummyimage.com/150x100/000/fff&text=Foto4",
                alt2: "Foto del testimonio 2 - imagen 2",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            },
            {
                id: 3,
                nombre: "Testimonio 3",
                imagen1: "https://dummyimage.com/150x100/000/fff&text=Foto5",
                alt1: "Foto del testimonio 3 - imagen 1",
                imagen2: "https://dummyimage.com/150x100/000/fff&text=Foto6",
                alt2: "Foto del testimonio 3 - imagen 2",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse."
            }
        ]
    },
    // Agregar esto al AboutContent en el mismo nivel que "Instalaciones"
    Logros: {
        anosExperiencia: {
            numero: "10+",
            texto: "Años de experiencia"
        },
        miembrosTransformados: {
            numero: "500+",
            texto: "Miembros transformados"
        },
        entrenadoresCertificados: {
            numero: "3",
            texto: "Entrenadores certificados"
        },
        accesoGimnasio: {
            numero: "24/7",
            texto: "Acceso al gimnasio"
        },
        cta: {
            titulo: "¿Listo para ser parte de nuestra familia?",
            botonTexto: "ÚNETE AHORA"
        }
    }
}