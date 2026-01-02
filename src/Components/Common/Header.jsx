import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Importa Link

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Sobre Nosotros', to: '/sobrenosotros' },
        { label: 'Contacto', to: '/contacto' }, // ✅ Cambia a mayúscula para que coincida
    ];

    return (
        <>
            <div className='w-full'>
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-4 md:gap-6 py-4 md:py-5 justify-center'>
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className='text-gray-200 hover:text-[#FF8C00] transition-colors text-base md:text-lg'
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex justify-end px-4 py-4'>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-white p-2 hover:text-[#FF8C00] transition-colors relative z-[100]'
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <>
                    <div
                        className='md:hidden fixed inset-0 bg-zinc-900/80 z-[60]'
                        onClick={() => setIsMenuOpen(false)}
                    />

                    <div className='md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-700 z-[80] shadow-2xl animate-slideDown'>
                        <div className='flex flex-col p-4 sm:p-6 space-y-2 sm:space-y-4'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className='text-gray-200 hover:text-[#FF8C00] hover:bg-zinc-800/50 transition-all duration-200 text-base sm:text-lg py-2 sm:py-3 px-3 rounded-lg block'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};