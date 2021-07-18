import { fetchData } from "@/lib/fetchData"

export default async function handler(req, res) {
    // const session = await getSession({ req })
    // const response = await fetch('https://api.github.com/user', {
    //     headers: {
    //         Authorization: `token ${session.accessToken}`,
    //     },
    // })
    // const data = await response.json()

    const data = await fetchData('https://api.github.com/user', {}, req)

    res.status(200).json(data)
}