import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/actions'
import './styles.css'

export default function TableItem ({item}) {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch(removeFromCart)
    
    function changeQuantity (event) {
        setQuantity(prev => prev = +event.target.value) 
    }

    return (
        <tr className="table-item">
            <td><img src={item.img} alt={item.title} /></td>
            <td> {item.title} </td>
            <td> {item.price} </td>
            <td>
                <input 
                    type="number" 
                    id="quantity" 
                    className="input-quantity" 
                    step="1" 
                    min="1" 
                    defaultValue="1" 
                    title="Кол-во" 
                    size="1" 
                    inputMode="numeric"
                    onChange={changeQuantity} 
                />
            </td>
            <td className="table__subtotal" id="table__subtotal"> <strong> {item.price*quantity} </strong></td>
            <td><button className="cart-remove-btn" onClick={() => {dispatch(removeFromCart(item.id))}}>&times;</button></td>
        </tr>
    )
}