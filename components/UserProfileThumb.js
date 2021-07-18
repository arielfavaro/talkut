import Image from "next/image"
import Link from "next/link"

export default function UserProfileThumb({ user }) {

    return (
        <div className="relative">
            <Link href={user.html_url}>
                <a target="_blank" rel="noreferrer">
                    <Image
                        className="rounded-lg brightness-50"
                        src={user.avatar_url}
                        width={100}
                        height={100}
                        alt=""
                        objectFit="cover"
                        objectPosition="center"
                    />
                    <span className="absolute bottom-0 left-0 p-2 text-xs text-white truncate">{user.login}</span>
                </a>
            </Link>
        </div>
    )
}