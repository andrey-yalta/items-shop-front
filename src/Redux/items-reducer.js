import {itemsAPI} from "../API/api";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_ITEMS = "SET_ITEMS";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const SET_SELECTED_SORT_BY = "SET_SELECTED_SORT_BY";

let initialState = {
    items:[],
    isFetching:false,
    SelectedCategory:null,
    SelectedSortBy:0,
    categories: ["Бобовые", "Семенные", "Стручковые","Листовые", "Соки"],
    sortsArray:[ { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавиту', type: 'name', order: 'asc' }]

};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_ITEMS:
            debugger;
            return {
                ...state,items: action.items,
            }
        case SET_SELECTED_CATEGORY:

            return {
                ...state,SelectedCategory: action.SelectedCategory,
            }
        case SET_SELECTED_SORT_BY:
            return {
                ...state,SelectedSortBy: action.SelectedSortBy,
            }
        default:
            return state;
    }
}
export default itemsReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setItems = (items) =>{
    return {type:SET_ITEMS,items}
};
export const setSelectedCategory = (SelectedCategory) =>{

    return {type:SET_SELECTED_CATEGORY,SelectedCategory}
};
export const setSelectedSortBy = (SelectedSortBy) =>{
    return {type:SET_SELECTED_SORT_BY,SelectedSortBy}
};

export const getItems = (category=null,SelectedSortBy=null) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        let data = await itemsAPI.getItems(category,SelectedSortBy);
        debugger;
        dispatch(toggleIsFetching(false));
        dispatch(setItems(data));
    }
}
export const addItemActionCreator = (name,price,imageUrl, category)=>{
    return async (dispatch) =>{
        const response = await itemsAPI.addItem(name,price,imageUrl,category)
        if (response ===200){
            debugger;
            dispatch(getItems() ).then(
                alert("добавлено !")
            )
        }
        else {
            console.log("error")
        }
    }
}

export const editItemActionCreator =(name,price, imgUrl,id, categoory =1)=>{
    return async (dispatch)=>{
        debugger;
        const response = await itemsAPI.editItem(name,price,imgUrl,id,categoory)
        if (response===200){
            debugger;
            dispatch(getItems())
                .then(
                    alert("отредакритовано")
                )
        }
        else {
            console.log("error")
        }
    }
}

export const deleteItemActionCreator =(id, )=>{
    return async (dispatch)=>{
        debugger;
        const response = await itemsAPI.deleteItem(id)
        if (response===200){
            debugger;
            dispatch(getItems())
                .then(
                    alert("удалено")
                )
        }
        else {
            console.log("error")
        }
    }
}