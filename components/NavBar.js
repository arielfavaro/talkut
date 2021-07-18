import Image from "next/image";
import Link from 'next/link'
import NavItems from "@/components/NavItems";
import { useState } from "react"
import { FaBars } from 'react-icons/fa'

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-primary py-2 mb-4">
            <div className="container flex flex-wrap items-center justify-between px-4 lg:px-0 gap-x-4">
                <div className="bg-white rounded-full px-4">
                    <Link href="/">
                        <a className="flex">
                            <Image
                                src="/logo-color.svg"
                                alt="Talkut"
                                width="80"
                                height="40"
                            />
                        </a>
                    </Link>
                </div>
                <div className="hidden lg:flex flex-grow gap-x-4">
                    <NavItems />
                </div>
                <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars className="text-white text-2xl" />
                </button>
            </div>
            <div className={`flex-col items-center lg:hidden ${isOpen ? 'flex' : 'hidden'}`}>
                <NavItems />
            </div>
        </nav>
    )
}