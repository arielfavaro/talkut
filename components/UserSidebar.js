import styles from '@/styles/UserSidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@/hooks/user'

export default function UserSidebar() {

    const { user, isLoading } = useUser()

    return (
        <div className={styles.wrapper}>
            {Object.keys(user).length > 0 &&
                <>
                    <div className="relative">
                        <Image
                            src={user.avatar_url}
                            width={160}
                            height={160}
                            alt={user.name}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="px-3 py-4">
                        <h2 className={styles.heading}>{user.name}</h2>
                        <p className="text-black py-2">{user.location}</p>
                        <div className="text-primary border border-l-0 border-r-0 py-3 flex flex-col gap-y-2">
                            <Link href="#">
                                <a>Perfil</a>
                            </Link>
                            <Link href="#">
                                <a>Recados</a>
                            </Link>
                        </div>

                    </div>
                </>
            }
        </div>
    )
}