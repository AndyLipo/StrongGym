export const MapComponent = ({ contactData, txt }) => {
    // URL para abrir Google Maps en una nueva pestaña
    const openGoogleMaps = () => {
        const mapsUrl = "https://www.google.com/maps/place/Strong+Training/@-34.3394705,-58.8044087,21z/data=!3m1!4b1!4m6!3m5!1s0x95bb6164f3a49ef7:0x47acdda8d2de88e5!8m2!3d-34.3394717!4d-58.8043612!16s%2Fg%2F11y3k5qp8w?entry=ttu&g_ep=EgoyMDI1MDEyOS4wIKXMDSoASAFQAw%3D%3D";
        window.open(mapsUrl, '_blank');
    };

    return (
        <div
            className="relative w-full h-96 rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
            onClick={openGoogleMaps}
        >
            {/* Iframe del mapa como background */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.7577622169993!2d-58.80440871845416!3d-34.33947054482077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb6164f3a49ef7%3A0x47acdda8d2de88e5!2sStrong%20Training!5e0!3m2!1ses!2sar!4v1758493555754!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay con gradiente para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300"></div>

            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 group-hover:bg-black/40 transition-all duration-300">
                    {txt && <h3 className="text-xl font-semibold mb-4">{txt}</h3>}
                    <div className="space-y-2 text-sm">
                        <p className="font-medium">{contactData.address.street}</p>
                        <p>{contactData.address.city}</p>
                        <p>{contactData.phone}</p>
                        <p>{contactData.email}</p>
                    </div>

                    {/* Indicador de que es clickeable */}
                    <div className="mt-4 text-xs text-white/80 group-hover:text-white transition-colors duration-300">
                        <span className="flex items-center justify-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Click para abrir en Google Maps</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};