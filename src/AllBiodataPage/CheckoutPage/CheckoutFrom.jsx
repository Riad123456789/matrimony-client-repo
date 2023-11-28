/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ImSpinner9 } from 'react-icons/im'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AuthContext } from '../../provider/AuthProvider';
import { SaveRequestInfo, paymentIntent } from '../../Api/payment';
import { useNavigate } from 'react-router-dom';

const CheckoutFrom = ({ Data }) => {
    const stripe = useStripe()
    const elements = useElements()

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const { user } = useContext(AuthContext)
    const price = 500
    const { Biodataid, Mobile_Number, Email } = Data
    const Navigate = useNavigate()


    useEffect(() => {
        if (price > 0) {
            paymentIntent({ price: price }).then(data => {
                console.log(data.clientSecret)
                setClientSecret(data.clientSecret)
            })
        }
    }, [price])

    // Create Payment Intent

    const handleSubmit = async event => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            })

        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
        }
        console.log('payment intent', paymentIntent)

        if (paymentIntent.status === 'succeeded') {

            const Requestdata = {
                Biodataid: Biodataid,
                Mobile_Number: Mobile_Number,
                Email: Email,
                email: user?.email,
                Name:user?.displayName,
                statas: "Pending",
            }
            try {

                await SaveRequestInfo(Requestdata)
                alert("request success")
                Navigate("/")
            } catch (error) {
                console.log(error)
            }



            setProcessing(false)
        }
    }

    return (
        <>
            <form className='my-2' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex mt-2 justify-around'>

                    <button
                        type='submit'
                        disabled={!stripe || !clientSecret || processing}
                        className=' w-full mt-5 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    >
                        {processing ? (
                            <ImSpinner9 className='m-auto animate-spin' size={24} />
                        ) : (
                            `Pay ${price}$`
                        )}
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    )
}

export default CheckoutFrom