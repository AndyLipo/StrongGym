import { PhoneIcon } from '../../Components/Common/Icons/PhoneIcon'
import { WhatsApp } from '../../Components/Common/Icons/WhatsApp.jsx'
import { Gmaps } from '../../Components/Common/Icons/Gmaps.jsx'

export const ContactContent = {
    //Card Contacto
    Contactos: [
        {
            id: 1,
            nombre: "Llamanos",
            icon: PhoneIcon,
            alt: "Numero de celular, llamanos",
            texto: "Podes llamarnos al numero + 54 9 3484 37-8204 y te responderemos a la brevedad."
        },
        {
            id: 2,
            nombre: "Visitanos",
            icon: Gmaps,
            alt: "Logo de google maps",
            texto: "Nos encontramos en Juan P. Asborno 1650, B1625 Belén de Escobar, Provincia de Buenos Aires, nuestros horarios se encuentran más abajo.",
            link: "https://www.google.com/maps/place/Strong+Training/@-34.3394705,-58.8044087,21z/data=!3m1!4b1!4m6!3m5!1s0x95bb6164f3a49ef7:0x47acdda8d2de88e5!8m2!3d-34.3394717!4d-58.8043612!16s%2Fg%2F11y3k5qp8w?entry=ttu&g_ep=EgoyMDI1MDEyOS4wIKXMDSoASAFQAw%3D%3D",
            linkType: "external"
        },
        {
            id: 3,
            nombre: "Escribenos",
            icon: WhatsApp,
            alt: "WhatsApp, escribenos",
            texto: "Podes contactarnos a través de WhatsApp en el boton de abajo a la derecha, sino a traves de nuestro formulario de consultas.",
            link: "https://wa.me/5493484378204?text=¡Hola!%20Me%20gustaría%20hacer%20una%20consulta%20sobre..."
        },
    ],
    //Horarios
    Horarios: [
        {
            id: 1,
            tipo: "Días de Semana",
            items: [
                { label: "Lunes a Viernes", valor: "7:00 AM - 9:00 PM" },
                { label: "Horario extendido", valor: "14 horas de servicio" }
            ]
        },
        {
            id: 2,
            tipo: "Fin de Semana",
            items: [
                { label: "Sábados", valor: "8:00 AM - 12:00 PM" },
                { label: "Domingos", valor: "Cerrado" }
            ]
        }
    ],
    //Contacto
    contacto: {
        badge: "Mensaje",
        titulo: "ENVÍANOS UN MENSAJE",
        form: {
            nombreLabel: "Nombre Completo *",
            emailLabel: "Email *",
            telefonoLabel: "Teléfono",
            tipoConsultaLabel: "Tipo de Consulta",
            tipoConsultaOpciones: [
                "Seleccione una opción",
                "Consulta General",
                "Membresías",
                "Clases Personalizadas",
                "Horarios",
                "Otro"
            ],
            mensajeLabel: "Mensaje",
            mensajePlaceholder: "Cuéntanos cómo podemos ayudarte...",
            botonEnviar: "ENVIAR MENSAJE",
            mensajeExito: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
            mensajeError: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
        }
    }
}