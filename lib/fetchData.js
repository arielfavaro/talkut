import { getSession } from "next-auth/react"

export async function fetchData(url = '', options = {}, req) {
    const session = await getSession({ req })

    if (!session) {
        return []
    }

    const response = await fetch(url, {
        headers: {
            Authorization: `token ${session.accessToken}`,
            'Content-type': 'application/json',
        },
        ...options,
    })

    const data = await response.json()

    return data
}