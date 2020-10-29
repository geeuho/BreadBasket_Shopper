import 'jquery/src/jquery';
import React, {Component} from 'react';
import {
  Route
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'
import CurrentOrders from './pages/CurrentOrders'
import EditShopper from './pages/EditShopper'
import ItemDetails from './pages/ItemDetails'
import MapPage from './pages/MapPage'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import Payment from './pages/Payment'
import PaymentDetails from './pages/PaymentDetails'
import Profile from './pages/Profile'
import Products from './pages/Products'
import ProfileSignup from './pages/ProfileSignup'
import SearchPage from './pages/SearchPage'
import ViewItems from './pages/ViewOrderItems'
import {getStores, getCategories, signOut, getActiveOrders, getItems, selectStore} from './actions'

class App extends Component  {
  
  componentDidMount(){
    this.props.getCategories()
    this.props.getStores()
    this.props.getItems(1)
    // this.props.getActiveOrders(this.props.shopperId)
    console.log(this.props.state)
  }
  
  render (){
    return (
      <div className="App">
        <div class="ui segment">
            <NavBar history = {this.props.history}/>
            <div class = "App-window">
              <Route exact path='/' render={(props) => <Home {...props} />}></Route> 
              <Route exact path='/about' render={(props) => <About {...props} />} />
              <Route exact path='/cart' render={(props) => <Cart {...props} />} />
              <Route exact path='/checkout' render={(props) => <Checkout {...props} />} />
              <Route exact path='/current_orders' render={(props) => <CurrentOrders {...props} />} />
              <Route exact path='/edit_shopper/:section' render={(props) => <EditShopper {...props} />} />
              <Route exact path='/item_details/:item_id' render={(props) => <ItemDetails {...props} />} />
              <Route exact path='/map_page' render={(props) => <MapPage {...props} />} />
              <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />}/>
              <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
              <Route exact path='/profile' render={(props) => <Profile {...props} />} />
              <Route exact path='/profile_signup' render={(props) => <ProfileSignup {...props} />} />
              <Route exact path='/products/:category' render={(props) => <Products {...props} />}/>
              <Route exact path='/payment_details/:order_id' render={(props) => <PaymentDetails {...props} />} />
              <Route exact path='/search/:item' render={(props) => <SearchPage {...props} />} />
              <Route exact path='/payment' render={(props) => <Payment {...props} />} />
              <Route exact path='/view_order_items/:order_id' render={(props) => <ViewItems {...props} />} />
              </div> 
        </div>

        <footer className="footer">
          <div class = 'footer-curve'>
          </div> 
          <div class = 'footer-div'>
            <div className = "row">
              <div className = "col-6">
               
                  <div className = "footer-logo">
                    <img class = "footer-icon" src= {process.env.PUBLIC_URL + '/bread_basket_icon.jpg'}></img> 
                    <h3>BreadBasket</h3>
                  </div>
                
              </div>
              <div className = "col-6">
                <p>© 2020 BreadBasket</p>
                <p>Allen Shin</p>
              </div>
            </div> 
          </div> 
          
        </footer>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return({
    state: state,
    shopperId: state.auth.currentShopper.id,
    selectedStore: state.stores.selectedStore
  })
}

export default connect(mapStateToProps, {getStores, getCategories, signOut, getActiveOrders, getItems, selectStore})(App)
