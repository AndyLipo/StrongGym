export const Señalador = ({ numero, text }) => {
    return (
        <div className="bg-orange-500 rounded-r-2xl sm:rounded-r-3xl md:rounded-r-4xl w-44 sm:w-52 md:w-60 lg:w-72 h-8 sm:h-10 md:h-12 flex items-center px-3 sm:px-4 text-white">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide whitespace-nowrap">
                {numero} {text}
            </span>
        </div>
    )
}