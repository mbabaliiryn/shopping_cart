import React from "react";
import Footer from '../Footer';


export default function HomePage() {
    return (
        <div>
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
                    <h2>Retail Order Optimization Management system </h2>
                    <h6>Trust us</h6>
                </div>
            </div>
            <Footer/>
        </div>
    )
}