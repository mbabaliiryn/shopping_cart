import React, {Component} from 'react'

import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'



export default function Header(){
    return(
        <header className="header">
            <div className="menu">
                <img src={Menu} alt="" width="20"/>

            </div>
            <div className="logo">
                <h1><a href="/">Nike</a></h1>

            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                    <li className="close"></li>
                    <img src={Close} alt="" width="20"/>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <a href="/cart">
                    <img src={CartIcon} alt="" width="20"/>
                    </a>

                </div>
            </nav>
        </header>
    )
}