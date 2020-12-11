import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/actions'
import { getCartGoods } from '../../store/selectors'
import './styles.css'

export default function GoodsCard ( props ) {
    const dispatch = useDispatch()
    const cartGoods = useSelector(getCartGoods)
    
    return (
        <li className="shop-card">
            <div className="shop-inner">
                <div className="shop-img">
                    <img src={props.item.img} alt={props.item.title} className="card-img" />
                </div>
                <span className="shop-btn">
                    <button onClick={() => {dispatch(addToCart(props.item.id))}}>
                        {cartGoods.find(item => item.id === props.item.id) ? 
                        <div>Добавлено</div>  : <div>В корзину</div>}
                    </button>
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