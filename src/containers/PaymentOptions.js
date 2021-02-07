import React from 'react' 
import { connect } from 'react-redux'
import PaymentOption from '../components/PaymentOption'
import Address from '../components/checkout_options/Address'
import CheckoutPayment from '../components/checkout_options/CheckoutPayment'
import Contact from '../components/checkout_options/Contact'
import DeliveryNote from '../components/checkout_options/DeliveryNote'
import DeliveryTime from '../components/checkout_options/DeliveryTime'
import Substitute from '../components/checkout_options/Substitute'
import Tip from '../components/checkout_options/Tip'
import { reduxForm, Field } from 'redux-form'
import {} from '../actions'

class PaymentOptions extends React.Component{
    
    //All have titles above the divider
    
    //Contact Information
    //Conditionally Add if no contacts
    //Select Button w/ Add Line or Phone Number Display underneath
    
    //Delivery Address
    //Conditionally Add if no address
    //Select Button w/ Add Button or Address Display underneath 
    
    //Tip
    //Select Button w/ 0, 5, 10, 15, 'other' options underneath or tip amount display
    
    //Delivery Time
    //Select button w/ Today, and 4 days ahead options, and time select options undeneath or date/time display
    
    //Substitution Preference
    //Select button w/ Pick for me, Contact me, Refund options or option display

    //Delivery Instructions
    //Select button with text input box and submit button or italicized quoted note
    
    //Payment Method 
    //Buttons underneath for Stripe/Paypal Options 
    

    render(){
        return(
            <React.Fragment>
                <PaymentOption title = 'Phone Number' selectType = "Add" bottomContent = {<Contact shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Address' selectType = "Add" bottomContent = {<Address shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Tip' selectType = "Select" bottomContent = {<Tip shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Delivery Time' selectType = "Select" bottomContent = {<DeliveryTime shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Substitution Preference' selectType = "Select" bottomContent = {<Substitute shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Delivery Notes' selectType = "Edit" bottomContent = {<DeliveryNote shopperId = {this.props.shopperId}/>}/>
                <PaymentOption title = 'Payment Method' bottomContent = {<CheckoutPayment shopperId = {this.props.shopperId}/>}/>
            </React.Fragment>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        shopperId: state.auth.currentShopper.id,
    })
}

export default connect(mapStateToProps, {})(PaymentOptions)