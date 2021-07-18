import UserInfo from "@/components/UserInfo"
import { GoRepo } from 'react-icons/go'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
import { useUser } from "../hooks/user"

export default function UserResumeSection() {

    const { user, isLoading } = useUser()

    return (
        <div className="bg-white rounded-xl p-6">
            {!isLoading &&
                <>
                    <h1 className="text-black text-xl lg:text-4xl">Bem-vindo(a) {user.name}</h1>

                    <p className="text-gray-400"><span className="font-bold">Sorte de hoje: </span>Se logou, está funcionando 🚀</p>

                    <div className="grid grid-cols-6 py-4">
                        <UserInfo label="Repositórios" value={user.public_repos} icon={<GoRepo />} />
                        <UserInfo label="Repositórios Privados" value={user.total_private_repos} icon={<RiGitRepositoryPrivateLine />} />
                    </div>
                </>
            }
        </div>
    )
}