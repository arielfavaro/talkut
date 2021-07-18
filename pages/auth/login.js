import Image from 'next/image'
import { getProviders, getSession, signIn } from 'next-auth/client'

export default function Login({ providers }) {

    return (
        <main className="bg-background dark:bg-background-dark w-screen h-screen">
            <section className="container flex flex-col content-center justify-center h-full">
                <div className="px-4 flex flex-wrap gap-4 w-full justify-around content-center items-stretch justify-center">
                    <div className="flex-grow bg-white dark:bg-background-dark-secondary rounded p-4">
                        <div className="flex justify-center">
                            <Image
                                src="/logo-color.svg"
                                alt="Talkut"
                                width="200"
                                height="100"
                            />
                        </div>
                        <div className="dark:text-white text-center">
                            <p><span className="text-primary font-bold">Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                            <p><span className="text-primary font-bold">Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
                            <p><span className="text-primary font-bold">Compartilhe</span> seus vídeos, fotos e paixões em um só lugar</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col justify-center bg-background-secondary dark:bg-background-dark-secondary rounded p-4 text-center">
                        <h3 className="dark:text-white py-4">Acesse o Talkut </h3>

                        {Object.values(providers).map(provider => (
                            <button
                                key={provider.name}
                                className="bg-background-dark text-white dark:bg-background-secondary dark:text-black rounded px-3 py-2 font-bold"
                                onClick={() => signIn(provider.id)}>
                                Logar com {provider.name}
                            </button>
                        ))}

                    </div>
                </div>
                <div className="py-1 mx-4 mt-4 rounded-full bg-background-active dark:bg-background-dark-secondary">
                    <p className="text-center dark:text-white">&copy; 2021 - Desenvolvido por <a className="text-primary" href="https://github.com/arielfavaro" target="_blank" rel="noreferrer">Ariel Favaro</a> na semana da Alurakut</p>
                </div>
            </section>
        </main>

    )
}

export async function getServerSideProps({ req }) {
    const providers = await getProviders()

    const session = await getSession({ req })

    if (session) {
        // res.writeHead(302, { 'Location': '/' })
        return {
            redirect: {
                destination: '/',
                permantent: false,
            },
        }
    }

    return {
        props: { providers }
    }
}