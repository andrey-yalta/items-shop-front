import React from "react"
export const OrderCard =({id, date,user,courses , price})=>{
    debugger;
    return(
        <div className="card">
            <div className="card-content">
                            <span className="card-title">
                                Заказ  <small>{id}</small>
                            </span>
                <p className="date">   {date} </p>
                <p> <em>{user.name}</em> {user.userId.email}</p>
                <ol>
                    {courses.map(u=><li key={u._id}>{u.item.name} - <strong>{u.item.price} руб.</strong></li>)}
                </ol>
                <hr/>
                <p><b>Общая цена:</b> <span className="price"> {price} руб </span></p>

            </div>
        </div>
    )
}