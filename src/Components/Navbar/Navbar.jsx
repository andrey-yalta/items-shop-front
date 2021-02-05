import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutActionCreator} from "../../Redux/auth-reducer";
export const Navbar =()=>{
    const count = useSelector(state => state.cartPage.count);
    const price = useSelector(state => state.cartPage.price);
    const isAuth = useSelector(state => state.authPage.isAuth);
    const dispatch = useDispatch();
    const onLogout =()=>{
        // debugger
        dispatch(logoutActionCreator())
    }
    return(
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo">AZ</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/shop">Магазин</NavLink></li>
                    <li><NavLink to="/cart">Корзина</NavLink></li>
                    {isAuth  && <li><NavLink to="/add">Добавить курс</NavLink></li>}
                    {isAuth  && <li><NavLink to="/orders">Заказы</NavLink></li>}

                    {!isAuth  &&<li className="nav-login "><NavLink to="/login" ><i className="material-icons right ">account_circle</i>Авторизация</NavLink></li>}
                    {isAuth && <li><NavLink  className="nav-login " to={"/login"} onClick={onLogout}><i className="material-icons right ">account_circle</i>Выйти</NavLink></li>}
                    <li><NavLink to="/cart" className="waves-effect waves-light btn-large"><i className="material-icons right">add_shopping_cart

                    </i>{count} / {price} руб</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}