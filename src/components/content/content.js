import React from 'react'
import { Link } from 'react-router-dom'
import GoodsCard from '../goodsCard'
import './styles.css'

export default function Content (props) {
    return (
        <div className="container">
            <div className="content-inner">
                <nav>
                    <Link className="nav__item" to="/">Главная</Link>
                    <h1 className="content-title">Магазин</h1>
                </nav>
                <br />
                <div className="sorting">
                    <div>Отображение {props.goods.length} из 12</div>
                    <div className="sorting-buttons">
                        <button className="sort-button" onClick={() => {props.showAll()}}>Все товары</button>
                        <button className="sort-button" onClick={() => {props.sortHandler('chair')}}>Кресла</button>
                        <button className="sort-button" onClick={() => {props.sortHandler('sofa')}}>Диваны</button>
                        <button className="sort-button" onClick={() => {props.sortHandler('lamp')}}>Лампы</button>
                    </div>
                    <form>
                        <select className="sort-select">
                            <option value="menu_order" defaultValue>Исходная сортировка</option>
                            <option value="popularity">По популярности</option>
                            <option value="rating">По рейтингу</option>
                            <option value="date">Сортировка по более позднему</option>
                            <option value="price">Цены: по возрастанию</option>
                            <option value="price-desc">Цены: по убыванию</option>
                        </select>
                        <input type="hidden" name="paged" value="1" />
                    </form>
                </div>
                <ul className="goods-ul">
                    { props.goods.map(item => {
                        return <GoodsCard item={item} key={item.id} />
                    })}
                </ul>
                
            </div>
            
        </div>
    )
}