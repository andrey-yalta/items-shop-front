import React from "react"
import {ShopItem} from "./Item/ShopItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemActionCreator, getItems} from "../../Redux/items-reducer";
import {addItemToCart} from "../../Redux/cart-reducer";

export const Shop =()=>{
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authPage.isAuth);
    const items = useSelector(state => state.shopPage.items); // достаем элементы
    React.useEffect(()=>{
        // получение массива элементов при загрузке страницы
        dispatch(getItems());
    },[dispatch])

    const onAddItemToCart = (id)=>{
        debugger;
        let addedItem = items.filter(u=> u._id === id)[0]

        if(addedItem){
            debugger;
            dispatch(addItemToCart(addedItem))
        }

        else {
            debugger;
            console.log("this item if not finded")
        }

    }
    const onRemoveClick =(id)=>{
        dispatch(deleteItemActionCreator(id))
    }




    return(
        <div>
            <h1>Магазин</h1>
            <div className="shop">
                <div className="row">
                    {items.map(u=> <ShopItem key={u._id} isAuth={isAuth} addToCartHandler ={onAddItemToCart}  onRemoveClick={onRemoveClick} {...u} />)}

            </div>
            </div>
        </div>
    )
}