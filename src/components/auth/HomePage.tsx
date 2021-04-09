import React, { useEffect, useState } from "react";
import Footer from '../Footer';
import axios from 'axios'
import Seller from "../seller";
import AvailableStock from "../Buyer";
import Logistics from "../Logistics";



export default function HomePage() {

    const [role, setRole] = useState('')
    axios.defaults.withCredentials = true;

    useEffect(()=> {
        axios.get("https://roomsapi.ichuzz2work.com/login").then((reponse) => {
                if (reponse.data.message.loggedIn === true) {
                    setRole(reponse.data.user[0].role);

                }
            });

    },[]);
    return (
        <div className="home-bg-img">
            <nav className="sticky-top">
                <input type="checkbox" id="check"/>
                <label className="checkbtn">
                    <i className="fas fa-bar"></i>
                </label>
                <label className="logo">Rooms Application</label>
                <ul>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div className="homepage">
                <div className="heading">
                  {/* <div>
                      {role === 'seller' && <Seller/>}
                      {role === 'buyer' && <AvailableStock/>}
                      {role === 'logistic' && <Logistics/>}
                      {role === 'buyer' && <AvailableStock/>}

                  </div> */}
                    <h2 className="home-heading">Your trusted App in the Market</h2>         
                </div>
            </div>
            <Footer/>
        </div>
    )
}
