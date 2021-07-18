import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import UserProfileThumb from "@/components/UserProfileThumb"

export default function UserFollowers() {

    const [followers, setFollowers] = useState([])

    useEffect(() => {

        fetch(`/api/user/followers`)
            .then(response => response.json())
            .then(data => setFollowers(data))

    }, [])

    return (
        <>
            <h3 className="text-xl font-bold mb-3">Meus Seguidores ({followers.length})</h3>
            <div className="grid grid-cols-3 gap-x-2">
                {followers.slice(0, 9).map(follower => (
                    <UserProfileThumb key={follower.id} user={follower} />
                ))}
            </div>
            {followers.length > 9 &&
                <Link href="/followers">
                    Ver Mais
                </Link>
            }
        </>
    )
}