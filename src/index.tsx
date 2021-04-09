import {mount, route} from 'navi';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-navi';

import './index.css';
import HomePage from './components/auth/HomePage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Report from './components/Report';
import Footer from './components/Footer';
import './styles/HomePage.css';
import './styles/Navbar.css';
import './styles/Footer.css'
import AppApi from "./components/utils/Api";
import App from './App';
import Seller from './components/seller';
import Sales from './components/SalePage';
import Logistics from './components/Logistics';
import ShoppingCartIcon from './components/Buyer';
// import { AddTodoForm } from './AddTodoForm';

export default App;



const routes = mount({
    "/": route({title: 'Home', view: <HomePage/>}),
    "login": route({title: 'Login', view: <LoginPage/>}),
    "register": route({title: 'Register', view: <RegisterPage/>}),
    "seller": route({title: 'Product', view: <Seller/>}),
    "sales": route({title: 'Product', view: <Sales/>}),
    "buyer": route({title: 'ProductProp', view: <ShoppingCartIcon />}),
   
    "report": route({title: 'Report', view: <Report/>}),
    "footer": route({title: 'Report', view: <Footer/>}),
    "logistics": route({title: 'Report', view: <Logistics/>}),

})

ReactDOM.render(
    <React.StrictMode>
        <Router routes={routes}/>
        <AppApi/>
    </React.StrictMode>,
    document.getElementById('root')
);

