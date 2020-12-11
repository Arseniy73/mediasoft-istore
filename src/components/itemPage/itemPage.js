import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions'
import { getGoods } from '../../store/selectors'
import './styles.css'


export default function ItemPage ({match: {params: {id}}}) {
    const goods = useSelector(getGoods)
    const dispatch = useDispatch()

    let itemCard = goods.find(item => item.id === +id)
    
    return (
        <div className="card-page-container">
            <div className="card-page__col">
                <img src={ "../" + itemCard.img} alt={itemCard.title} className="item-page-img" />
            </div>
            <div className="card-page__col">
                <h1>{itemCard.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eius, aspernatur culpa fuga voluptatem harum recusandae tempore qui voluptatibus obcaecati.</p>
                <h1> <strong>{itemCard.price} руб</strong> </h1>  
                <button className="item-page__buy" onClick={() => {dispatch(addToCart(itemCard.id))}}>В корзину</button>
            </div>
        </div>
    )
}