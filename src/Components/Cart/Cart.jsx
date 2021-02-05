import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {CartItems} from "./CartItems";
import {removeItemFromCart, sendCartToOrder} from "../../Redux/cart-reducer";
export const Cart =()=>{
    const dispatch = useDispatch();
    const price = useSelector(state => state.cartPage.price);
    const Items = useSelector(state => state.cartPage.CartItems);

    const onRemoveItemFromCart = (id)=>{
        debugger;
        try{
            dispatch(removeItemFromCart(id))
        }catch (e) {
            console.log(e)
        }
    }
    const onOrderButtonCLick =()=>{
        dispatch(sendCartToOrder(Items, price))
    }

    return(
        <div>
            <h1>Корзина</h1>

            <table>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>Действия</th>
                </tr>
                </thead>

                <tbody>

                {Items.map(u=> <CartItems removeItemHandler={onRemoveItemFromCart} key={u.id} id={u.id} name = {u.name} price={u.price}/>)}
                </tbody>
                    </table>
                    <p><b> Цена:</b> <span className="price">{price} руб</span></p>
            <button className="btn btn-small js-remove" onClick={onOrderButtonCLick}>Сделать заказ</button>
        </div>
    )
}