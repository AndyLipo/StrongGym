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
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <section>
                {/* Señalador */}
                <div className="mb-6 text-center mx-auto">
                    <Señalador numero="4 " text={ContactContent.contacto.badge} className="inline-block" />
                </div>

                {/* Título */}
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    {ContactContent.contacto.titulo}
                </h2>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <form
                    action="https://formspree.io/f/mdkwerqb"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    {/* Fila 1: Nombre y Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Nombre Completo */}
                        <div>
                            <label
                                htmlFor="nombre"
                                className="block text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.nombreLabel}
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.emailLabel}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    {/* Fila 2: Teléfono y Tipo de Consulta */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Teléfono */}
                        <div>
                            <label
                                htmlFor="telefono"
                                className="block text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.telefonoLabel}
                            </label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Tipo de Consulta */}
                        <div>
                            <label
                                htmlFor="tipo-consulta"
                                className="block text-sm text-gray-600 mb-2"
                            >
                                {ContactContent.contacto.form.tipoConsultaLabel}
                            </label>
                            <div className="relative">
                                <select
                                    id="tipo-consulta"
                                    name="tipo-consulta"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                                >
                                    {ContactContent.contacto.form.tipoConsultaOpciones.map((opcion, idx) => (
                                        <option key={idx} value={opcion}>
                                            {opcion}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mb-6">
                        <label
                            htmlFor="mensaje"
                            className="block text-sm text-blue-600 font-medium mb-2"
                        >
                            {ContactContent.contacto.form.mensajeLabel}
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="6"
                            required
                            placeholder={ContactContent.contacto.form.mensajePlaceholder}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Botón de envío */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {ContactContent.contacto.form.botonEnviar}
                        </button>
                    </div>

                    {/* Mensajes de estado */}
                    {formStatus === 'success' && (
                        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                            {ContactContent.contacto.form.mensajeExito}
                        </div>
                    )}
                    {formStatus === 'error' && (
                        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                            {ContactContent.contacto.form.mensajeError}
                        </div>
                    )}
                </form>
            </section>
        </div>
    )
}