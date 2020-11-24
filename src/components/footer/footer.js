import React from 'react'
import './styles.css'
import logo from '../header/header-logo/logo.png'

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-inner">
                    <div className="footer-content">
                        <img src={logo} alt="mediasoft" />
                        <div className="footer-text">
                            Демо-сайт премиум шаблона Mediasoft.
                            Информация на сайте исключительно для ознакомления.
                        </div>
                        <div className="footer-offer">Материалы сайта приведены для примера и не являются офертой.</div>
                    </div>
                    <div className="footer-help">
                        <p><strong>Помощь</strong></p>
                        <p className="footer__item">Оплата заказа</p>
                        <p className="footer__item">Профиль</p>
                        <p className="footer__item">Мои заказы</p>
                    </div>
                    <div className="footer-nav">
                        <p><strong>Разделы</strong></p>
                        <p className="footer__item">Диваны</p>
                        <p className="footer__item">Стулья</p>
                        <p className="footer__item">Свет</p>
                        <p className="footer__item">Для офиса</p>
                    </div>
                    <div className="footer-support">
                        <p className="footer-social">
                            <span className="footer-social__item"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                            <span className="footer-social__item"><i className="fa fa-vk" aria-hidden="true"></i></span>
                            <span className="footer-social__item"><i className="fa fa-telegram" aria-hidden="true"></i></span>
                            <span className="footer-social__item"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                        </p>
                        <p className="footer__item">Служба поддержки</p>
                        <p className="footer__item">Пожаловаться</p>
                    </div>
                </div>
                <div className="footer-bottom">© 2020 Шаблон для интернет-магазина MEDIASOFT. Все права защищены. Копирование информации запрещено. Информация на сайте не является публичной офертой.</div>
            </div>
        </div>
    )
}