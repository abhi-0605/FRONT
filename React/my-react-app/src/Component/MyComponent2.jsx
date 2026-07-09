import React from 'react'
import { useState } from 'react'


function MyComponent2() {
    const [name, setname] = useState("");
    const [quantity, setquantity] = useState(1);
    const [comment, setcomment] = useState("");
    const [payment, setpayment] = useState("");
    const [shipping, setshipping] = useState();

    function handleNameChange(event) {
        setname(event.target.value)
    }

    function handleQuantityChange(event) {
        setquantity(event.target.value)
    }

    function handleCommentChange(event) {
        setcomment(event.target.value)
    }

    function handlePaymentChange(event) {
        setpayment(event.target.value)
    }

    function handleShippingChange(event){
        setshipping(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange} ></input>
            <p>Name : {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' ></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter dev instruction' ></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} >
                <option>select an option</option>
                <option value="visa" >Visa</option>
                <option value="Mastercard" >Mastercard</option>
                <option value="GiftCard" >GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="pickup" checked={shipping==="pick Up"} onChange={handleShippingChange} ></input>
                PickUp
            </label>
            <label>
                <input type="radio" value="delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} ></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent2
