import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, setPcs } from '../../store/actions'
import './styles.css'

export default function TableItem ({item}) {
    const [quantity, setQuantity] = useState(item.pcs)
    const dispatch = useDispatch()

    const subtotal = item.price*quantity
    
    function changeQuantity (event) {
        setQuantity(+event.target.value)
        dispatch(setPcs(item.id, +event.target.value ))
    }

    useEffect(() => {
        console.log("sum changed")
    }, [dispatch])
    

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
                    defaultValue={item.pcs} 
                    title="Кол-во" 
                    size="1" 
                    inputMode="numeric"
                    onChange={changeQuantity} 
                />
            </td>
            <td className="table__subtotal" id="table__subtotal"> <strong> {subtotal} </strong></td>
            <td><button className="cart-remove-btn" onClick={() => {dispatch(removeFromCart(item.id))}}>&times;</button></td>
        </tr>
    )
}