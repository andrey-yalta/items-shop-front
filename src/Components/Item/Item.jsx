import React from "react"
import {NavLink} from "react-router-dom";
export const Item =(props)=>{

    return(

        <div>
        <div className="item__item">
            <img src={props.img } alt=""/>
            <h1>{props.name }</h1>
            <b>{props.price}</b>
            <NavLink to="/shop"><button className="btn"> В магазин</button></NavLink>
        </div>}
        </div>

    )
}