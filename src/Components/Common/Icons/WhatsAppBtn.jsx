import { WhatsApp } from './WhatsApp';

export const WhatsAppBtn = () => {
    const phoneNumber = '5493484378204';
    const message = '¡Hola! Me gustaría hacer una consulta sobre...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-5 right-6 z-50">
            <div className="relative flex">
                {/* Animación ping */}
                <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                {/* Botón principal */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Enviar mensaje por WhatsApp"
                >
                    <WhatsApp className="size-7 text-white" />
                </a>
            </div>
        </div>
    )
}