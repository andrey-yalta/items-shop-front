import React from "react"

export const Footer = ()=>{
    return(

        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">AZ-Shop</h5>
                        <p className="grey-text text-lighten-4">Магазин будет написан с помощью технологий react, redux,
                        node js, express, mongodb</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Ссылки</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="/">Главная</a></li>
                            <li><a className="grey-text text-lighten-3" href="/">Магазин</a></li>
                            <li><a className="grey-text text-lighten-3" href="/">Коризна</a></li>
                            <li><a className="grey-text text-lighten-3" href="/">Авторизация</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>

    )
}