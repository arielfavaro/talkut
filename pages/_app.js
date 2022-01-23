import Head from 'next/head'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/hooks/user'

function TalkutApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta key="description" name="description" content="A Dev's social network" />
                <meta key="keywords" name="keywords" content="" />
                <link key="canonical" rel="canonical" href="https://talkut.com.br/" />
                <link rel="icon" href="/favicon.ico" />

                <title key="title">Talkut</title>

                {/* <link rel="manifest" href="/manifest.json" /> */}

                {/* <link
                    href="/icons/icon192.png"
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                />
                <link
                    href="/icons/icon512.png"
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                />
                <link rel="apple-touch-icon" href="/icons/icon192.png"></link> */}
                <meta name="theme-color" content="#ac5bf7" />
            </Head>

            <SessionProvider session={session}>
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </SessionProvider>
        </>
    )
}

export default TalkutApp
