import React from "react"
export const CartItems = ({name, price, id, removeItemHandler})=>{
    const onClickRemoveButton=()=>{
        debugger
        removeItemHandler(id)
    }

    return(
        <tr>
            <td> {name}</td>
            <td> 1</td>
            <td>{price} Руб</td>

            <td>
                <button onClick={onClickRemoveButton} className="btn btn-small js-remove" > Удалить</button>
            </td>
        </tr>
    )
}
