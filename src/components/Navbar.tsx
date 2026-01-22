import Link from 'next/link'

const Navbar = () => {

    const navList = [
        { href: "/dashboard", name: "Dashboard" }
        , { href: "/user", name: "User" }
        , { href: "/sign-in", name: "sign-in" }
        , { href: "/sign-up", name: "sign-up" }
    ]


    return (
        <div className='absolute top-10 left-0 w-full flex items-center justify-between border-b border-gray-700 pb-5'>
            <Link href={"/"}>CLERK</Link>
            <nav className='flex items-center gap-4'>
                {navList?.map((nav) => <Link key={nav.href} href={nav.href}>{nav.name}</Link>)}
            </nav>
        </div>
    )
}

export default Navbar