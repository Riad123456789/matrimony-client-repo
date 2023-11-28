import axiosSecure from "./Index"

export const paymentIntent = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', price)
    return data
} 


export const SaveRequestInfo = async (Requestdata)=> {
      const { data } = await axiosSecure.post(`/requestdata`, Requestdata)
    return data
}
