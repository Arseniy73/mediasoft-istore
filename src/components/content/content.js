import React from 'react'
import GoodsCard from '../goodsCard'
import './styles.css'

export default function Content (props) {
    return (
        <div className="container">
            <div className="content-inner">
                <nav>
                    <a href="#">Главная</a>
                    <h1 className="content-title">Магазин</h1>
                </nav>
                <br />
                <div className="sorting">
                    <div>Отображение 1–16 из 24</div>
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