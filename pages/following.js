import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import UserSidebar from '@/components/UserSidebar'
import Link from 'next/link'
import Shimmer from "react-shimmer-effect"
import UserProfileThumb from '@/components/UserProfileThumb'

export default function Followers() {

    const [isLoading, setIsLoading] = useState(true)
    const [following, setFollowing] = useState([])

    useEffect(() => {

        fetch('/api/user/following')
            .then(response => response.json())
            .then(data => {
                setFollowing(data)
                setIsLoading(false)
            })

    }, [])

    return (
        <>
            <NavBar />
            <div className="container">
                <Head>
                    <title>Seguindo - Talkut</title>
                </Head>
                <div className="flex gap-x-4">
                    <UserSidebar />
                    <div className="bg-white rounded-xl p-4 flex-grow">
                        <h3 className="font-bold text-2xl mb-3">Seguindo</h3>
                        <div className="flex gap-2">
                            {following.map(follow => (
                                <UserProfileThumb key={follow.id} user={follow} />
                            ))}
                            {isLoading &&
                                <Shimmer>
                                    <div className="w-28 h-24 mb-4"></div>
                                    <div className="w-28 h-24 mb-4"></div>
                                    <div className="w-28 h-24 mb-4"></div>
                                </Shimmer>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}