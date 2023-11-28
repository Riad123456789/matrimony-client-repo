import axiosSecure from "./Index"

export const paymentIntent = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', price)
    return data
} 


export const SaveRequestInfo = async (Requestdata)=> {
      const { data } = await axiosSecure.post(`/requestdata`, Requestdata)
    return data
}



export const getAllRequestInfo = async ()=> {
      const { data } = await axiosSecure.get(`/Allrequestdata`)
    return data
}


// export const singleRequestdataa = async (email) => {
//   const { data } = await axiosSecure.get(`/singleRequestdataa/${email}`)
//   return data
// }