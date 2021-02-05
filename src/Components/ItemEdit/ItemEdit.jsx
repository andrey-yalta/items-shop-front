import React from "react"
import {NavLink} from "react-router-dom";

export const ItemEdit =(props)=>{

    const [name, setName] = React.useState( props.name);
    const [price, setPrice] = React.useState(props.price);
    const [url, setUrl] = React.useState( props.img);
    const onCLickEditButton=()=>{
        debugger;
        props.onEditClick(name,price,url, props._id)
    }
    const onClickRemoveButton=()=>{
        props.onRemoveClick(props._id)
    }
    const onNameChange = (e)=>{
        setName(e.currentTarget.value);
    }
    const onUrlChange = (e)=>{
        setUrl(e.currentTarget.value);
    }
    const onPriceChange = (e)=>{
        setPrice(e.currentTarget.value);
    }
    return(
        <div>
            <h2>редактирование</h2>
            <div className="item__item">
                <img src={props.img } alt=""/>
                <input  type="text" value={url} onChange={onUrlChange}/>
                <h1>{props.name }</h1>
                <input type="text" value={name} onChange={onNameChange}/>
                <b>{props.price}</b>
                <input type="text" value={price} onChange={onPriceChange}/>
                <NavLink to="/shop"><button className="btn"> В магазин</button></NavLink>
                <button className="btn" onClick={onCLickEditButton}> Редактировать</button>
                <button className="btn" onClick={onClickRemoveButton}> Удалить</button>
            </div>
        </div>

    )
}