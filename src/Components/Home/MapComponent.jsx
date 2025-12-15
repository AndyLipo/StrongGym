export const MapComponent = () => {
    const openGoogleMaps = () => {
        const mapsUrl = "https://www.google.com/maps/place/Strong+Training/@-34.3394705,-58.8044087,21z/data=!3m1!4b1!4m6!3m5!1s0x95bb6164f3a49ef7:0x47acdda8d2de88e5!8m2!3d-34.3394717!4d-58.8043612!16s%2Fg%2F11y3k5qp8w?entry=ttu&g_ep=EgoyMDI1MDEyOS4wIKXMDSoASAFQAw%3D%3D";
        window.open(mapsUrl, '_blank');
    };

    return (
        <>
            <section>
                <div
                    className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden cursor-pointer group"
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
                        className="absolute inset-0 w-full h-full"
                        title="Mapa de Strong Training"
                    />
                </div>
            </section>
        </>
    );
};
