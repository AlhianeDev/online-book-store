import React from 'react'

const OrderSummary = ({ cartItems }) => {

    return (

        <div className="order-summary">

            <h3 className="order-summary__title">ORDER SUMMARY</h3>

            <div className="order-summary__item">

                <span>Subtotal</span>
                
                <span>${
                
                    cartItems.reduce((acc, cur) => {

                        return acc + (cur.price * cur.quantity)

                    }, 0).toFixed(2)
                
                }</span>

            </div>

            <div className="order-summary__item">
                    
                <span>Shipping Cost</span>

                <span>0</span>

            </div>

            <div className="order-summary__item">
                    
                <span>Discount</span>

                <span>0</span>

            </div>

            <div className="order-summary__item">

                <span>Total</span>
                
                <span>${
                
                    cartItems.reduce((acc, cur) => {

                        return acc + (cur.price * cur.quantity)

                    }, 0).toFixed(2)
                
                }</span>

            </div>

        </div>

    )
    
}


export default OrderSummary
