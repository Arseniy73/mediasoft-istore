import React, { useContext } from 'react'
import { Context } from '../../App'
import './styles.css'


export default function ItemPage ({match: {params: {id}}}) {
    const goods = useContext(Context)

    let itemCard = goods.find(item => item.id === +id)
    console.log("render itempage")
    console.log(id)
    console.log(itemCard)
    
    return (
        <div className="card-page-container">
            <div className="card-page__col">
                <img src={ "../" + itemCard.img} alt={itemCard.title} className="item-page-img" />
            </div>
            <div className="card-page__col">
                <h1>{itemCard.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eius, aspernatur culpa fuga voluptatem harum recusandae tempore qui voluptatibus obcaecati.</p>
                <h1> <strong>{itemCard.price} руб</strong> </h1>  
                <button className="item-page__buy">В корзину</button>
            </div>
        </div>
    )
}