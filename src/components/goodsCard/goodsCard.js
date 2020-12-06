import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'




export default function GoodsCard ( props ) {
    /* console.log("goodscard") */

    /* const id = props.item.id
    console.log(id) */


    return (
        <li className="shop-card">
            <Link className="shop-inner" to={"/itemPage/" + props.item.id}>
                <div className="shop-img">
                    <img src={props.item.img} alt={props.item.title} className="card-img" />
                </div>
                <span className="shop-btn">
                    <button>В корзину</button>
                    {/* <Link to={"/itemPage/" + props.item.id}><button>Подробнее</button></Link> */}
                </span>
                <div>
                    <p className="shop-item"> {props.item.title} </p>
                    <p className="shop-price"> {props.item.price} </p>
                </div>
            </Link>
        </li>
    )
}