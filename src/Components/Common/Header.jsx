import { HeaderLink } from './HeaderLink'

export const Header = () => {
    const navItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Sobre Nosotros', href: '/about' },
        { label: 'Entrenadores', href: '/trainers' },
        { label: 'Precios', href: '/pricing' },
        { label: 'Testimonio', href: '/SucessStory' },
    ]

    return (
        <>
            <div className=''>
                <div className='flex items-center gap-6 m-5 z-10'>
                    {navItems.map((navItems) => (
                        <HeaderLink key={navItems.href} navItems={navItems} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}
