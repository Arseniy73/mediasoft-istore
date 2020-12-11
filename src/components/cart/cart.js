import React from 'react'
import { useSelector } from 'react-redux'
import { getCartGoods } from '../../store/selectors'
import TableItem from '../tableItem'
import './styles.css'

export default function Cart () {
    const cartGoods = useSelector(getCartGoods)

    return (
        <div className="cart-container">
            <h1 className="cart-title">Корзина</h1>
            <div className="cart-wrapper">
                <div className="cart-content">
                    {(cartGoods.length > 0) ?
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th className="table-img">Товар</th>
                                <th className="table-name">Имя</th>
                                <th className="table-price">Цена</th>
                                <th className="table-quantity">Количество</th>
                                <th className="table-sum">Итого</th>
                                <th className="table-remove">Х</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartGoods.map(item => {return <TableItem item={item} key={item.id} />})}
                        </tbody>
                    </table>
                    : <h2>Вы пока ничего не добавили</h2>}
                </div>
                <div className="cart-sum">Сумма заказов</div>
            </div>
            
        </div>
    )
}