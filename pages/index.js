import Head from 'next/head'
import UserSidebar from '@/components/UserSidebar'
import styles from '@/styles/Home.module.css'
import UserResumeSection from '@/components/UserResumeSection'
import UserFollowers from '@/components/UserFollowers'
import UserFollowing from '@/components/UserFollowing'
import NavBar from '@/components/NavBar'
import { getSession } from 'next-auth/react'

export default function Home() {

    return (
        <>
            <NavBar />
            <div className="container">
                <Head>
                    <title>Home - Talkut</title>
                </Head>

                <main className={styles.main}>
                    <UserSidebar />
                    <UserResumeSection />
                    <div className="bg-white rounded-xl p-6">
                        <UserFollowers />
                        <UserFollowing />
                    </div>
                </main>

            </div>
        </>
    )
}

export async function getServerSideProps({ req }) {

    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permantent: false,
            },
        }
    }

    return {
        props: {}
    }
}