import Link from "next/link"
import { useEffect, useState } from "react"
import UserProfileThumb from "@/components/UserProfileThumb"

export default function UserFollowing() {

    const [following, setFollowing] = useState([])

    useEffect(() => {

        fetch(`/api/user/following`)
            .then(response => response.json())
            .then(data => setFollowing(data))

    }, [])

    return (
        <>
            <h3 className="text-xl font-bold mb-3">Seguindo ({following.length})</h3>
            <div className="grid grid-cols-3 gap-x-2">
                {following.slice(0, 9).map(follower => (
                    <UserProfileThumb key={follower.id} user={follower} />
                ))}
            </div>
            {following.length > 9 &&
                <Link href="/following">
                    Ver Mais
                </Link>
            }
        </>
    )
}