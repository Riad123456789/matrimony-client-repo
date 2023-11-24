import axiosSecure from "./Index"


export const saveuser = async user => {
    const CurrentUser = {
        email: user.email,
        role: "Normal",
        status: "verified",
    }
    const { data } = await axiosSecure.put(`/users/${user.email}`, CurrentUser)
    return data
}


export const gettoken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email)
    return data
}


export const clearCookies = async () => {
    const { data } = await axiosSecure.get("/logout")
    return data
}