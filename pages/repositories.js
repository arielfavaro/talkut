import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { useEffect, useState } from 'react'
import UserSidebar from '@/components/UserSidebar'
import Link from 'next/link'
import Shimmer from "react-shimmer-effect"

export default function Repositories() {

    const [isLoading, setIsLoading] = useState(true)
    const [repositories, setRepositories] = useState([])

    useEffect(() => {

        fetch('/api/user/repositories')
            .then(response => response.json())
            .then(data => {
                setRepositories(data)
                setIsLoading(false)
            })

    }, [])

    return (
        <>
            <NavBar />
            <div className="container">
                <Head>
                    <title>Repositórios - Talkut</title>
                </Head>
                <div className="flex gap-x-4">
                    <UserSidebar />
                    <div className="bg-white p-4 rounded-xl flex-grow">
                        <h3 className="font-bold text-2xl mb-3">Repositórios</h3>
                        {repositories.length > 0 && repositories.map(repo => (
                            <div key={repo.id} className="bg-background p-4 rounded mb-4">
                                <Link href={repo.html_url}>
                                    <a target="_blank" rel="noreferrer">
                                        <h3 className="font-bold">{repo.name}</h3>
                                    </a>
                                </Link>
                            </div>
                        ))}
                        {isLoading &&
                            <Shimmer>
                                <div className="w-full h-14 mb-4"></div>
                                <div className="w-full h-14 mb-4"></div>
                                <div className="w-full h-14 mb-4"></div>
                            </Shimmer>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}