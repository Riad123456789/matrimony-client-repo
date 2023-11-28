import axiosSecure from "./Index"


export const getBiodata = async Biodatainfo => {
    const { data } = await axiosSecure.post(`/Biodata`, Biodatainfo)
    return data
}



export const getAlldata = async () => {
    const { data } = await axiosSecure('/AllBiodata')
    return data
}


export const getSingledata = async (id) => {
    const { data } = await axiosSecure(`/SingleBiodata/${id}`)
    return data
}



export const favoriteBiodata = async datainfo => {
    const { data } = await axiosSecure.post(`/favoriteData`, datainfo)
    return data



}



