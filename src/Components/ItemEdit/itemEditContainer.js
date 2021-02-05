import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {deleteItemActionCreator, editItemActionCreator, getItems} from "../../Redux/items-reducer";

import {ItemEdit} from "./ItemEdit";

export const ItemEditContainer =(props)=>{

    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.shopPage.isFetching);
    const items = useSelector(state => state.shopPage.items); // достаем элементы
    const id = props.match.params.itemId
    const item = items.filter(u => u._id === id)[0]

    React.useEffect(()=>{
        // получение массива элементов при загрузке страницы

        dispatch(getItems());

    },[dispatch])

    const onEditClick =(name,price,url,id) =>{
        debugger;
        dispatch(editItemActionCreator(name,price,url,id))
    }
    const onRemoveClick =(id)=>{
        dispatch(deleteItemActionCreator(id))
    }

    if(isFetching){

        return (<div><h2>preloader</h2></div>)
    }
    return(
        <div>
            <ItemEdit {...item}  onEditClick={onEditClick} onRemoveClick={onRemoveClick}/>
        </div>
    )
}