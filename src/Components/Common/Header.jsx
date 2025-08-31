import { HeaderLink } from './HeaderLink'

export const Header = () => {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Trainers', href: '/trainers' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Sucess Story', href: '/SucessStory' },
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
