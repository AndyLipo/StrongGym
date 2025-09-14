export const MapComponent = ({ contactData }) => {
    return (
        <div className="w-full h-96 bg-zinc-700 rounded-lg flex items-center justify-center">
            {/* Aquí iría tu componente de mapa real */}
            <div className="text-center text-white">
                <h3 className="text-xl font-semibold mb-4">Encuentranos aquí</h3>
                <div className="space-y-2">
                    <p>{contactData.address.street}</p>
                    <p>{contactData.address.city}</p>
                    <p>{contactData.phone}</p>
                    <p>{contactData.email}</p>
                </div>
            </div>
        </div>
    )
}