import axiosSecure from "./Index"


export const getBiodata = async Biodatainfo => {
    const { data } = await axiosSecure.post(`/Biodata`, Biodatainfo)
    return data
}



export const getAlldata = async () => {
    const { data } = await axiosSecure('/AllBiodata')
    return data
}

export const AlldataRequest = async (id, update) => {
    const { data } = await axiosSecure.patch(`/AllBiodataUpdate/${id}`, update)
    return data
}




export const MakeAdmin = async (id, update) => {
    const { data } = await axiosSecure.patch(`/MakeAdmin/${id}`, update)
    return data
}


export const getAlldatafilter = async (Data, Division, Age) => {
    const { data } = await axiosSecure(`/AllBiodataa?Type=${Data}&Permanent_Division=${Division}&Age=${Age}`)
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



export const AllfavoriteBiodata = async (email) => {
    const { data } = await axiosSecure.get(`/AllfavoriteBiodata/${email}`)
    return data
}


export const Allfavorite = async () => {
    const { data } = await axiosSecure.get(`/Allfavorite`)
    return data
}




export const deletefavoriteBiodata = async (id) => {
    const { data } = await axiosSecure.delete(`/deletefavoriteBiodata/${id}`)
    return data
}



export const  approvedrequest = async (id, update) => {
    const { data } = await axiosSecure.patch(`/approvedrequest/${id}`, update)
    return data
}


export const deleteRequestBiodata = async (id) => {
    const { data } = await axiosSecure.delete(`/deleteRequestBiodata/${id}`)
    return data
}


