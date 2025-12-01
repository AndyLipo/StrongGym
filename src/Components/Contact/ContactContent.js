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
            texto: "Nos encontramos en Juan P. Asborno 1650, B1625 Belén de Escobar, Provincia de Buenos Aires, nuestros horarios se encuentran más abajo."
        },
        {
            id: 3,
            nombre: "Escribenos",
            icon: WhatsApp,
            alt: "WhatsApp, escribenos",
            texto: "Podes contactarnos a través de WhatsApp en el boton de abajo a la derecha, sino a traves de nuestro formulario de consultas."
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