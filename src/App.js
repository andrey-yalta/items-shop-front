import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import React from "react";
import {Footer} from "./Components/Footer/Footer";
import {Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Shop} from "./Components/Shop/Shop";
import {Cart} from "./Components/Cart/Cart";
import {Login} from "./Components/Login/Login";
import {AddCourse} from "./Components/AddCourse/AddCourse";
import {ItemContainer} from "./Components/Item/ItemContainer";
import {ItemEditContainer} from "./Components/ItemEdit/itemEditContainer";
import {Registration} from "./Components/Login/Registration";
import {initializeApp} from "./Redux/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./Components/common/Preloader";
import {Orders} from "./Components/Orders/Orders";

function App() {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.appPage.initialized);
  React.useEffect(()=>{
    // получение массива элементов при загрузке страницы
    dispatch(initializeApp());

  },[dispatch])

  if (!initialized) {
      return <Preloader/>
  }

  return (
    <div className="App ">
    <Navbar/>
      <div className="container main">

        <Route path={"/shop"} render={ ()=> <Shop/> }/>
        <Route path={"/cart"} render={ ()=> <Cart/> }/>
        <Route path={"/login"} render={ ()=> <Login/> }/>
        <Route path={"/registration"} render={ ()=> <Registration/> }/>
        <Route path={"/add"} render={ ()=> <AddCourse/> }/>
        <Route path={"/orders"} render={ ()=> <Orders/> }/>
        <Route exact path={"/item/:itemId?"} render={ (props)=> <ItemContainer {...props}/> }/>
        <Route exact path={"/item/edit/:itemId?"} render={ (props)=> <ItemEditContainer {...props}/> }/>
        <Route exact path={"/"} render={ ()=> <Home/> }/>

      </div>
    <Footer/>
    </div>
  );
}

export default App;
