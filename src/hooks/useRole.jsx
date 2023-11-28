import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { getRole } from "../Api/auth"


const useRole = () => {

    const { user } = useContext(AuthContext)
    const [role, setrole] = useState(null)
    useEffect(() => {

        getRole(user?.email).then(data => {

            setrole(data)
        })

    }, [user])

    return [role]
}

export default useRole