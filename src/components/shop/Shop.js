import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
   const products = useLoaderData()
    const [cart, setCart]=useState([])

   
    const handleAddToCart=(product)=>{
       
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(()=>{
        const storedCart= getStoredCart();
        const savedCart = [];

        for (const id in storedCart){
            const addedProduct= products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
            addedProduct.quantity=quantity ;
        savedCart.push(addedProduct)           }
        }
        setCart(savedCart)
    },[products])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                       <Cart cart={cart}></Cart>
                       <Link to='/order'>
                       <button>review item</button>
                       </Link>
            </div>
        </div>
    );
};

export default Shop;