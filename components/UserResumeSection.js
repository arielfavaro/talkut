import UserInfo from "@/components/UserInfo"
import { GoRepo } from 'react-icons/go'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
import { BsCalendar } from 'react-icons/bs'
import Shimmer from "react-shimmer-effect"
import { useUser } from "@/hooks/user"

export default function UserResumeSection() {

    const { user, isLoading } = useUser()

    return (
        <div className="bg-white rounded-xl p-6">
            {!isLoading &&
                <>
                    <h1 className="text-black text-xl lg:text-4xl">Bem-vindo(a) {user.name}</h1>

                    <p className="text-gray-400"><span className="font-bold">Sorte de hoje: </span>Se logou, está funcionando 🚀</p>

                    <div className="flex flex-col lg:grid grid-cols-4 gap-y-3 py-4">
                        <UserInfo label="Repositórios Públicos" value={user.public_repos} icon={<GoRepo className="text-xl" />} />
                        <UserInfo label="Repositórios Privados" value={user.total_private_repos} icon={<RiGitRepositoryPrivateLine className="text-xl" />} />
                        <UserInfo label="GitHub criado em" value={(new Date(user.created_at)).toLocaleString('pt-BR', { hour12: false })} icon={<BsCalendar className="text-xl" />} />
                    </div>
                </>
            }
            {isLoading && <>
                <Shimmer>
                    <div className="w-full h-12"></div>
                    <div className="w-full px-4 h-4 pb-4"></div>
                    <div className="px-4 h-4"></div>
                </Shimmer>
            </>}
        </div>
    )
}