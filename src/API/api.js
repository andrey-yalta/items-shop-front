import * as axios from "axios";
// import items from "../Assets/db.json"

const instance = axios.create({
    withCredentials: true,
    headers:{'Content-Type': 'application/json'},
    baseURL:`http://localhost:8000/api/`
});

export const itemsAPI  = {
    getItems ()   {
        // debugger;
        return instance.get("items")
            .then(response=> {
                debugger;
                return response.data})
    },

    addItem(name,price, imageUrl,category){

            return instance.post("items/add", {name,price, imageUrl,category})
                .then(response=> {
                    debugger;
                    return response.status})
    },
    editItem(name,price,img,id,category){
        return instance.post("items/edit", {name,price,img,id,category})
            .then(response=>{
                debugger;
                return response.status
            })
    },
    deleteItem(id){
        return instance.post("items/remove", {id})
            .then(response=>{
                debugger;
                return response.status
            })
    }

}



export const authAPI = {

    login(email, password, rememberMe = false, ){
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response=> {
                return response.data})
    },
    registration(email,password,repeat=true,name){
        debugger;
        return instance.post(`/auth/register`, {email, password,repeat, name})
            .then(response=> {
                return response.data})
    },
    logout( ){
        return instance.get(`/auth/logout` )
            .then(response=> {
                return response.data})
    },
    me( ){
        return instance.get(`/auth/me` )
            .then(response=> {
                return response})
    }
}



export const ordersAPI = {
    sendOrder(orderList, price){
        debugger;
        return instance.post(`orders`, {orderList, price})
            .then(response=> {
                return response.data})
    },
    getOrders(){
        return instance.get("orders")
            .then(response=> {
                debugger;
                return response.data})
    }
}