// import { useState } from 'react';

// // ============= HEADER RESPONSIVO =============
// export const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navItems = [
//         { label: 'Inicio', to: '/' },
//         { label: 'Sobre Nosotros', to: '/sobrenosotros' },
//         { label: 'Contacto', to: '/contacto' },
//     ];

//     return (
//         <div className='w-full'>
//             {/* Desktop Menu */}
//             <div className='hidden md:flex items-center gap-6 m-5 z-10 justify-center'>
//                 {navItems.map((item) => (
//                     <a
//                         key={item.to}
//                         href={item.to}
//                         className='text-gray-200 hover:text-[#FF8C00] transition-colors text-lg'
//                     >
//                         {item.label}
//                     </a>
//                 ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className='md:hidden flex justify-end m-5'>
//                 <button
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     className='text-white p-2 hover:text-[#FF8C00] transition-colors'
//                 >
//                     {isMenuOpen ? (
//                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isMenuOpen && (
//                 <div className='md:hidden absolute top-20 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-700 z-40'>
//                     <div className='flex flex-col p-6 space-y-4'>
//                         {navItems.map((item) => (
//                             <a
//                                 key={item.to}
//                                 href={item.to}
//                                 className='text-gray-200 hover:text-[#FF8C00] transition-colors text-lg py-2'
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item.label}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Sobre Nosotros', to: '/sobrenosotros' },
        { label: 'Contacto', to: '/contacto' },
    ];

    return (
        <div className='w-full max-w-full overflow-hidden'>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-6 m-5 z-10 justify-center'>
                {navItems.map((item) => (
                    <a
                        key={item.to}
                        href={item.to}
                        className='text-gray-200 hover:text-[#FF8C00] transition-colors text-lg'
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex justify-end px-4 py-3'>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='text-white p-2 hover:text-[#FF8C00] transition-colors'
                >
                    {isMenuOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className='md:hidden fixed top-16 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-b border-zinc-700 z-40 w-full'>
                    <div className='flex flex-col p-6 space-y-4 max-w-full'>
                        {navItems.map((item) => (
                            <a
                                key={item.to}
                                href={item.to}
                                className='text-gray-200 hover:text-[#FF8C00] transition-colors text-lg py-2'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )
            }
        </div>
    );
};