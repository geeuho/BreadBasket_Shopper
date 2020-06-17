import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (

                
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" >BreadBasket</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item active">
                            <a class="nav-link"><Link to='/orderpage'>Make an Order</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/about'>About</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/orderhistory'>Order History</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><Link to='/profile'>Profile</Link></a>
                        </li>
                        
                        
                    </ul>
                    <ul class = "navbar-nav justify-content-end">
                        <li class="nav-item active">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/cart'>Cart</Link></button>
                        </li>
                    </ul>
                </div>
            </nav>
        
          
        )
    }
}

export default Navbar
