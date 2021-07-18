import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function EnsureAuthenticated({ children }) {
    const router = useRouter()
    const [session, loading] = useSession()

    // TODO verificar melhor forma
    // TODO verificar documentacao nextjs sobre authentication, server-side, https://nextjs.org/docs/authentication
    useEffect(() => {
        if (loading) return

        if (!session) {
            router.route !== '/auth/login' && router.push('/auth/login')
        }
    }, [session, loading, router])

    return children
}