export const ContactContent = {
    //Card Contacto
    Contactos: [
        {
            id: 1,
            nombre: "Llamanos",
            imagen: "https://dummyimage.com/150x100/000/fff&text=Foto1",
            alt: "Foto del testimonio 2 - imagen 2",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            id: 2,
            nombre: "Visitanos",
            imagen: "https://dummyimage.com/150x100/000/fff&text=Foto2",
            alt: "Foto del testimonio 2 - imagen 2",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            id: 3,
            nombre: "Escribenos",
            imagen: "https://dummyimage.com/150x100/000/fff&text=Foto3",
            alt: "Foto del testimonio 2 - imagen 2",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
    ],
    //Horarios
    Horarios: [
        {
            id: 1,
            tipo: "Días de Semana",
            items: [
                { label: "Lunes a Viernes", valor: "8:00 AM - 11:00 PM" },
                { label: "Horario extendido", valor: "17 horas de servicio" }
            ]
        },
        {
            id: 2,
            tipo: "Fines de Semana",
            items: [
                { label: "Sábados", valor: "7:00 AM - 2:00 PM" },
                { label: "Domingos", valor: "8:00 AM - 8:00 PM" },
                { label: "Acceso 24/7", valor: "Mientras Premium", destacado: true }
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