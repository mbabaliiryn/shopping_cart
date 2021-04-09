import React, {FC, useEffect} from 'react';
import '../component/shopping-cart-icon/ShoppingCartIcon.css'
import CartIcon from '../assets/shopping-cart.svg'
import { ShoppingContext } from '../contexts/ShoppingContext';
import {ProductService} from '../service/product.service';
import Products from '../component/products/Products';
import ShoppingCart from '../component/shopping-cart/ShoppingCart';



import {Product as ProductModel} from '../model/product';

import { Types } from "../reducers/ShoppingReducer"


// import {Product as ProductModel} from '../model/product';

// import { Types } from "../reducers/ShoppingReducer"


interface ShoppingCartIconProps {
    onClick: () => void;
}

const ShoppingCartIcon =  () => {

    const { state } = React.useContext(ShoppingContext)
    const productService = new ProductService();

    const onClick = ()=>{
        
    }
    

    return (
        <>
        <div className='icon-container' onClick={(onClick)}>
            <img className='shopping-cart-icon' src={CartIcon} alt='shopping-cart-icon'/>
                <span className='number-of-items-in-cart'>{state.counter}</span>
        </div>
            <ShoppingCart/> : <Products productService={productService}/>
         
            
        </>
    );
};

export default ShoppingCartIcon;
