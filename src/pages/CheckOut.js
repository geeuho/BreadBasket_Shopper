import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../components/CheckoutItem'
import {placeOrder, addOrderItem, removeCartItem, dropCart} from '../actions'

class CheckOut extends React.Component{
    componentDidMount(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
    }

    placeOrder = () => {
        let orderInfo = {
            payment: this.props.cartDelivery, 
            tip: this.props.cartTip,
            total: this.props.cartTotal,
            store_id: this.props.storeId,
            shopper_id: this.props.shopperId,
            status: 'active'
        }
        //:order_id, :item_id, :quantity_num, :status
    
        console.log(this.props.orderId)
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        cartItems.forEach(cartItem => {
            let orderItemInfo = {
                order_id: this.props.orderId,
                item_id: cartItem.attributes.item_id,
                quantity_num: cartItem.attributes.quantity_num, 
                status: "pending"
            }
            console.log(orderItemInfo)
            this.props.addOrderItem(orderItemInfo)
        })    
        for (let i = 0; i < keys.length; i++) {
            this.props.removeCartItem(keys[i])
        }
    
        this.props.dropCart()
        this.props.history.push('/')

    }

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        return cartItems.map(item => {
            let attributes = item.attributes
            console.log(attributes)
            return (
                <CheckoutItem price = {attributes.item.price} image = {attributes.item.image} count = {attributes.quantity_num} units = {attributes.item.quantity_unit} name = {attributes.item.name}></CheckoutItem>
            )
        })
    }

    render(){
        return(
            <div className = "container">
                <h1> Checkout </h1>
                <div> 
                    {this.renderItems()}
                </div>
                <div >
                    <h3>SubTotal: {`$${this.props.cartSubTotal.toFixed(2) }`}</h3>
                    <h3>Delivery: {`$${this.props.cartDelivery.toFixed(2)}`}</h3>
                    <h3>Tip: {`$${this.props.cartTip.toFixed(2)}`}</h3>
                    <h3>Total: {`$${this.props.cartTotal.toFixed(2)}`}</h3>
                </div>
                <button onClick ={() => this.placeOrder()}>Place Order</button>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return({
        orderId: state.order.order_id,
        shopperId: state.auth.currentShopper.shopper_info.id,
        storeId: state.stores.selectedStore.id,
        cartItems: state.cart.cart_items,
        cartSubTotal: state.cart.subtotal,
        cartDelivery: state.cart.delivery,
        cartTip: state.cart.tip,
        cartTotal: (state.cart.subtotal + state.cart.delivery + state.cart.tip)
    })
}

export default connect(mapStateToProps, { placeOrder, addOrderItem, removeCartItem, dropCart})(CheckOut)