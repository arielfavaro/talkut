import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

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
            <div className="grid grid-cols-3 gap-x-3">
                {followers.slice(0, 9).map(follower => (
                    <div key={follower.id}>
                        <Image
                            className="rounded-lg"
                            src={follower.avatar_url}
                            width={100}
                            height={100}
                            alt=""
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
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