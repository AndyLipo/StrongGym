import React, { useState } from 'react'
import { Señalador } from '../Common/Señalador'
import { ContactContent } from './ContactContent'

export const ContactoForm = () => {
    const [formStatus, setFormStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setFormStatus('success')
                form.reset()
            } else {
                setFormStatus('error')
            }
        } catch (error) {
            setFormStatus('error')
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto py-8 sm:py-12">
            <section>
                {/* Señalador */}
                <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <Señalador numero="4" text={ContactContent.contacto.badge} />
                </div>

                {/* Título */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
                    {ContactContent.contacto.titulo}
                </h2>
            </section>

            <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg px-4 sm:px-8 md:px-8">
                <form
                    action="https://formspree.io/f/mdkwerqb"
                    method="POST"
                    onSubmit={handleSubmit}
                    className='p-10'
                >
                    {/* Fila 1: Nombre y Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        {/* Nombre Completo */}
                        <div>
                            <label
                                htmlFor="nombre"
                                className="block text-xs sm:text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.nombreLabel}
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-black"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs sm:text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.emailLabel}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-black"
                            />
                        </div>
                    </div>

                    {/* Fila 2: Teléfono y Tipo de Consulta */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        {/* Teléfono */}
                        <div>
                            <label
                                htmlFor="telefono"
                                className="block text-xs sm:text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.telefonoLabel}
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-black"
                            />
                        </div>

                        {/* Tipo de Consulta */}
                        <div>
                            <label
                                htmlFor="tipo-consulta"
                                className="block text-xs sm:text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.tipoConsultaLabel}
                            </label>
                            <div className="relative">
                                <select
                                    id="tipo-consulta"
                                    name="tipo-consulta"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer text-black"
                                    style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
                                >
                                    {ContactContent.contacto.form.tipoConsultaOpciones.map((opcion, idx) => (
                                        <option key={idx} value={opcion} className="py-2 text-black">
                                            {opcion}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mb-4 sm:mb-6">
                        <label
                            htmlFor="mensaje"
                            className="block text-xs sm:text-sm text-gray-600 font-medium mb-2"
                        >
                            {ContactContent.contacto.form.mensajeLabel}
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="5"
                            required
                            placeholder={ContactContent.contacto.form.mensajePlaceholder}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none text-black"
                        ></textarea>
                    </div>

                    {/* Botón de envío */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {ContactContent.contacto.form.botonEnviar}
                        </button>
                    </div>

                    {/* Mensajes de estado */}
                    {formStatus === 'success' && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 text-green-700 rounded-lg text-center text-sm sm:text-base">
                            {ContactContent.contacto.form.mensajeExito}
                        </div>
                    )}
                    {formStatus === 'error' && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-100 text-red-700 rounded-lg text-center text-sm sm:text-base">
                            {ContactContent.contacto.form.mensajeError}
                        </div>
                    )}
                </form>
            </section>
        </div>
    )
}