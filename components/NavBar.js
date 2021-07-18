import { signOut } from "next-auth/client";
import Image from "next/image";
import Link from 'next/link'
import { useUser } from "@/hooks/user";

export default function NavBar() {

    const { user, isLoading } = useUser()

    return (
        <nav className="bg-primary py-2 mb-4">
            <div className="container flex items-center gap-x-4">
                <div className="bg-white rounded-full px-4 flex items-center">
                    <Image
                        src="/logo-color.svg"
                        alt="Talkut"
                        width="80"
                        height="40"
                    />
                </div>
                <Link href="/followers">
                    <a className="text-white">Seguidores</a>
                </Link>
                <Link href="/repositories">
                    <a className="text-white">Repositórios</a>
                </Link>
                <div className="text-white ml-auto flex gap-x-4">
                    <span className="text-white">{!isLoading && user.email}</span>
                    <button className="text-white" onClick={() => signOut()}>
                        Sair
                    </button>
                </div>
            </div>
        </nav>
    )
}