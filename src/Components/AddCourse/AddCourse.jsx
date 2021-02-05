import React from "react"
import {useDispatch} from "react-redux";
import {addItemActionCreator} from "../../Redux/items-reducer";
export const AddCourse = ()=>{
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [url, setUrl] = React.useState("");
    // const [category, setCategory] = React.useState("");
    const dispatch = useDispatch();
    const onAddItem =()=>{
        // debugger;
        dispatch(addItemActionCreator(name,price, url, 1))
    }


    // const categories = [1,2,3,4,5]
   //  const [SelectedCategory, setSelectedCategory] = React.useState(null);
   // const onSelectCategoriesType =(index)=>{
   //     setSelectedCategory(categories[index])
   // }

    return(
        <div>
            <h1>Создание продукты</h1>


            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">assessment</i>
                            <input value={name} onInput={e=>setName(e.target.value)} id="icon_prefix" type="text" className="validate"/>
                            <label htmlFor="icon_prefix">Название</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">euro_symbol</i>
                            <input value={price} onInput={e=>setPrice(e.target.value)} id="icon_telephone" type="text" className="validate"/>
                            <label htmlFor="icon_telephone">Цена</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">crop_free</i>
                            <input value={url} onInput={e=>setUrl(e.target.value)} id="icon_telephone" type="text" className="validate"/>
                            <label htmlFor="icon_telephone">Url изображения</label>
                        </div>


                        {/*<div className="input-field col s6">*/}
                        {/*    <i className="material-icons prefix">crop_free</i>*/}
                        {/*    <input value={category} onInput={e=>setCategory(e.target.value)} id="icon_telephone" type="text" className="validate"/>*/}
                        {/*    <label htmlFor="icon_telephone">категория</label>*/}
                        {/*    <div className="categories col s6">*/}
                        {/*        <ul>*/}
                        {/*            <li>1</li>*/}
                        {/*            <li>2</li>*/}
                        {/*            <li>3</li>*/}
                        {/*            <li>4</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                    </div>

                </form>
                <button onClick={onAddItem} className="btn waves-effect waves-light" >Войти
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    )
}
