import React from 'react'
import './styles.css'

export default function Cart () {
    return (
        <div className="cart-container">
            <h1 className="cart-title">Корзина</h1>
            <div className="cart-wrapper">
                <div className="cart-content">1</div>
                <div className="cart-sum">2</div>
            </div>
            
        </div>
        
    )
}