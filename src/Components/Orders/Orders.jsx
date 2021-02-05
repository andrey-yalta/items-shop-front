import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {getOrderListReducer} from "../../Redux/order-reducer";
import {OrderCard} from "./OrderCard";
import moment from 'moment';
import 'moment/locale/ru'

moment.locale('ru');         // be



export const Orders =(props)=>{
    const dispatch = useDispatch();
    const items = useSelector(state => state.orderPage.OrderList); // достаем элементы
    React.useEffect(()=>{
        // получение массива элементов при загрузке страницы
        dispatch(getOrderListReducer());
    },[dispatch])
    const onOrdersButtonClick = ()=>{
        dispatch(getOrderListReducer());
        console.log(items)
    }




    debugger;
    return(
        <div >
            <h2>Заказы </h2>
            <div className="row">
                <div className="col s6 offset-s3">

                    {
                        items.map(u=><OrderCard price={u.price} key={u._id} id ={u._id} date={moment(u.date).format('LL')} user={u.user} courses={u.courses}/>)}
                </div>
            </div>
            <button onClick={onOrdersButtonClick} className="btn"> Вывести список заказов </button>
        </div>
    )
}