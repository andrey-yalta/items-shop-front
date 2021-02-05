import {ordersAPI} from "../API/api";




const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
// const REMOVE_ORDER_FROM_LIST = "REMOVE_ORDER_FROM_LIST";
const ADD_ORDER_TO_LIST = "ADD_ORDER_TO_LIST";
// const GET_ORDER_LIST = "GET_ORDER_LIST";
const SET_ORDER_LIST = "SET_ORDER_LIST";
//


let initialState = {
    OrderList:[],
    isFetching: false,

};

const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ADD_ORDER_TO_LIST:
            debugger;
            return {

                ...state, CartItems: [...state.CartItems, action.item], price:state.price += action.item.price, count: state.count +=1,
            }
        case SET_ORDER_LIST:
            debugger;
            return {
                ...state,OrderList: action.OrderList,
            }
        default:
            return state;
    }
}
export default orderReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}


export const sendOrder = (orders, price) => async(dispatch) => {
    debugger;
    let response = await ordersAPI.sendOrder(orders, price);

    if (response === "OK") {
        debugger;
        //success, get auth data
        alert("Заказано")
        return 200;
        // dispatch(getAuthUserData())


    }
    else{
    debugger;
        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        console.log(response)
    }
}


export const setOrderList = (OrderList) =>{
    return {type:SET_ORDER_LIST,OrderList}
};
export const getOrderListReducer = () => async(dispatch)=>{
    dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
    let data = await ordersAPI.getOrders();
    debugger;
    dispatch(toggleIsFetching(false));
    dispatch(setOrderList(data));
}