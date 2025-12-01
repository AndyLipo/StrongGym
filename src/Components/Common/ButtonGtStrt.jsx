export const ButtonGtStrt = ({ txt }) => {
    return (
        <button className='bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300'>
            <div className='flex items-center gap-2 sm:gap-4'>
                <span className='text-sm sm:text-base md:text-lg'>{txt}</span>
                <div className='flex items-center justify-center bg-black/80 rounded-full w-10 h-10 sm:w-12 sm:h-12 hover:scale-105 shadow-lg hover:shadow-xl transition-transform duration-200'>
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </div>
            </div>
        </button>
    );
};