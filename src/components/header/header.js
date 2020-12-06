import React from 'react'
import brand from './header-logo/brand.png'
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'

export default function Header (props) {
    /* let hours = props.time.getHours()
    hours = ("0" + hours).slice(-2);
    let minutes = props.time.getMinutes()
    minutes = ("0" + minutes).slice(-2); */

    function changeTheme () {
        props.changeTheme()
    }

    return (
        <div>
            <div className="super-header">
                <div className="header-item">г. Ульяновск, ул. Карла Маркса, 13А к.3, 3 этаж</div>
                <button className="header-theme-btn" onClick={changeTheme}>Сменить тему</button>
                <div className="header-item">Скидки на Диван Куба до конца месяца!</div>
            </div>
            <header className="main-header">
                <div className="container">
                    <div className="brand">
                        <img src={brand} alt="mediasoft" />
                    </div>
                    <div className="header-menu">
                        <ul>
                            <Link className="header-menu__item" to="/">Главная</Link>
                            <Link className="header-menu__item" to="/payment">Оплата заказа</Link>
                            <Link className="header-menu__item" to="/blog">Блог</Link>
                        </ul>
                    </div>
                    <div  className="social-menu">
                        <ul>
                            <li className="social-menu__item">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </li>
                            <li className="social-menu__item">
                                <i className="fa fa-vk" aria-hidden="true"></i>
                            </li>
                            <li className="social-menu__item">
                                <i className="fa fa-telegram" aria-hidden="true"></i>
                            </li>
                            <li className="social-menu__item">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="header__phone">
                        <a href="tel:%2B74952002020">+7 495 200 20 20<br /><small>с 10:00 до 15:00</small></a>
                    </div>
                    <div className="cart">
                        <ul>
                            <li className="cart__item">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </li>
                            <li className="cart__item">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </header>
        </div>
    )
}