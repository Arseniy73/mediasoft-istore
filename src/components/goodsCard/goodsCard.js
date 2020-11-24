import React from 'react'
import './styles.css'

export default function GoodsCard ( props ) {
    return (
        <li className="shop-card">
            <div className="shop-inner">
                <div className="shop-img">
                    <img src={props.item.img} alt={props.item.title} />
                </div>
                <span className="shop-btn">
                    <button>В корзину</button>
                </span>
                <div>
                    <p className="shop-item"> {props.item.title} </p>
                    <p className="shop-price"> {props.item.price} </p>
                </div>
            </div>
        </li>
    )
}