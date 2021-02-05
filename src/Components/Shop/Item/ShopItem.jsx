import React from "react"
import {NavLink} from "react-router-dom";
export const ShopItem = ({name, img, price, category, _id, addToCartHandler,onRemoveClick,isAuth})=>{
    const onClickToAddButton = ()=>{

        addToCartHandler(_id)
    }
    const onClickToRemoveButton=()=>{
        onRemoveClick(_id)
    }


    return(


            <div className="col s12 m6 ">
                <div className="card z-depth-3">
                    <div className="card-image">
                        <img src={img} alt={name}/>
                            <h3 className="card-title">{name}</h3>
                    </div>
                    <div className="card-content">
                        {/*<p>I am a very simple card. I am good at containing small bits of information.*/}
                        {/*    I am convenient because I require little markup to use effectively.</p>*/}
                        <b className="price">{price} рублей</b>
                    </div>
                    <div className="card-action">
                        <button className="btn " onClick={onClickToAddButton}> Купить</button>
                        <NavLink to={"/item/" + _id}>
                        <button className="btn "> Открыть</button></NavLink>
                        {isAuth && <NavLink to={"/item/edit/" + _id}><button className="btn "> Редактировать</button></NavLink>}
                        {isAuth &&<button onClick={onClickToRemoveButton} className="btn "> Удалить</button>}
                    </div>

                </div>
            </div>

    )
}