import {sendOrder} from "./order-reducer";


const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const ADD_ITEMS_TO_CART = "ADD_ITEMS_TO_CART";
const CLEAR_CART ="CLEAR_CART"

let initialState = {
    CartItems:[],
    count:0,
    price:0,

};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ADD_ITEMS_TO_CART:
            debugger;

            // newCartItems.filter(u=> u.id === action.id)
            // const newPrice = state.price += action.item.price

            return {

                ...state, CartItems: [...state.CartItems, action.item], price:state.price += action.item.price, count: state.count +=1,
            }
        case REMOVE_ITEM_FROM_CART:
            debugger;
            let newCartItems =  [...state.CartItems]
            debugger;
            const idx = newCartItems.findIndex(u=> u.id === action.id)
            debugger;
            const newPrice = state.price - newCartItems[idx].price
            debugger;
            delete newCartItems[idx]
            newCartItems = newCartItems.filter(u=> true)
            debugger;
            return {
                ...state, CartItems:newCartItems,price:newPrice , count: state.count -=1
            }
        case CLEAR_CART:
            return {
                ...state, CartItems: [], price: 0, count: 0
            }
        default:
            return state;
    }
}
export default cartReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const removeItemFromCart = (id) =>{
    return{type:REMOVE_ITEM_FROM_CART, id}
}
export const addItemToCart = (item) =>{
    return {type:ADD_ITEMS_TO_CART,item}
};
export const clearCart = ()=>{
    return{type:CLEAR_CART}
}

export const sendCartToOrder = (CartItems, price)=> async (dispatch)=>{
    debugger;
    const response = await dispatch(sendOrder(CartItems, price))
    if (response===200){
        debugger;
        debugger;
        dispatch(clearCart())
        alert("корзина очищена")
    }
    else {
        debugger;
        console.log("error")
    }
}
