import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/actions'
import './styles.css'




export default function GoodsCard ( props ) {
    const dispatch = useDispatch()
    /* console.log("goodscard") */

    /* const id = props.item.id
    console.log(id) */


    return (
        <li className="shop-card">
            <div className="shop-inner">
                <div className="shop-img">
                    <img src={props.item.img} alt={props.item.title} className="card-img" />
                </div>
                <span className="shop-btn">
                    <button onClick={() => {dispatch(addToCart(props.item.id))}}>В корзину</button>
                    <Link to={"/itemPage/" + props.item.id}><button>Детали</button></Link>
                </span>
                <div>
                    <p className="shop-item"> {props.item.title} </p>
                    <p className="shop-price"> {props.item.price} </p>
                </div>
            </div>
        </li>
    )
}