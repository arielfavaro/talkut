import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext({})

function UserProvider({ children }) {

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`/api/user`)
            .then(response => response.json())
            .then(data => {
                setUser(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <UserContext.Provider value={{ user, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

function useUser() {
    const context = useContext(UserContext)
    return context
}

export { UserProvider, useUser }