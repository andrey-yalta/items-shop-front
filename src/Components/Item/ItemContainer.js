import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {getItems} from "../../Redux/items-reducer";
import {Item} from "./Item";

export const ItemContainer =(props)=>{
    const dispatch = useDispatch();

    const items = useSelector(state => state.shopPage.items); // достаем элементы
    const isFetching = useSelector(state => state.shopPage.isFetching);
    const id = props.match.params.itemId

    const item = items.filter(u => u._id === id)[0]
    console.log("item contianer was render")

    React.useEffect(()=>{
        debugger;
        // получение массива элементов при загрузке страницы
        dispatch(getItems());

    },[dispatch])


    if(isFetching){
        return (<div><h2>preloader</h2></div>)
    }
    return(

        <div>
            <Item {...item}/>
        </div>

    )
}