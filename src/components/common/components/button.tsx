'use client'
import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg'
import { RiCloseLine } from "react-icons/ri"

const Button = ({ isOpen, sideBarOpen }: { isOpen: boolean; sideBarOpen: () => void }) => {

    const links = [
        {
            id: 1,
            link: "/",
            title: "Services"
        },
        {
            id: 2,
            link: "/",
            title: "Blog"
        }, {
            id: 3,
            link: "/",
            title: "Technologies"
        }, {
            id: 4,
            link: "/about",
            title: "About"
        }, {
            id: 5,
            link: "/contact-us",
            title: "Contact"
        },
    ]
    return (
        <>
            <button onClick={sideBarOpen} className='sm:hidden relative z-[1000]'>
                {isOpen ? <RiCloseLine className='size-6' /> : <CgMenuRight className='size-6 ' />}
            </button>
            <div className={`fixed top-0 right-0 w-full p-4 min-h-screen bg-headercolor transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='grid grid-cols-1 place-items-center pt-32'>
                    {links.map(link => {
                        return (
                            <Link className='my-3 text-xl font-semibold' key={link.id} href={link.link}>{link.title}</Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Button
