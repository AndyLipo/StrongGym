import { NavLink } from 'react-router-dom'

export const Header = () => {
    const navItems = [
        { label: 'Inicio', to: '/' },
        { label: 'Sobre Nosotros', to: '/sobrenosotros' },
        { label: 'Contacto', to: '/contacto' },
    ]

    return (
        <>
            <div className=''>
                <div className='flex items-center gap-6 m-5 z-10'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#FF8C00] font-semibold text-xl'
                                    : 'text-gray-200 hover:text-[#FF8C00] transition-colors text-lg'
                            }
                            end={item.to === '/'}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}