import { fetchData } from "@/lib/fetchData"

export default async function handler(req, res) {

    const data = await fetchData('https://api.github.com/user/followers', {}, req)

    res.status(200).json(data)
}