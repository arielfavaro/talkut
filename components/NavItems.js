import { signOut } from "next-auth/react";
import Link from 'next/link'
import { useUser } from "@/hooks/user";

export default function NavItems() {
    const { user, isLoading } = useUser()

    return (
        <>
            <Link href="/followers">
                <a className="text-white py-3 lg:py-0">Seguidores</a>
            </Link>
            <Link href="/following">
                <a className="text-white py-3 lg:py-0">Seguindo</a>
            </Link>
            <Link href="/repositories">
                <a className="text-white py-3 lg:py-0">Repositórios</a>
            </Link>
            <div className="text-white lg:ml-auto flex flex-col lg:flex-row gap-x-4">
                <span className="text-white py-3 lg:py-0">{!isLoading && user.email}</span>
                <button className="text-white py-3 lg:py-0" onClick={() => signOut()}>
                    Sair
                </button>
            </div>
        </>
    )
}
