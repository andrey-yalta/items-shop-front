import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData, loginActionCreator} from "../../Redux/auth-reducer";
import {NavLink} from "react-router-dom";
export const Login =()=>{

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authPage.isAuth);
    const onLogin =()=>{
        // debugger
        dispatch(loginActionCreator(email,password))
    }
    const onIsAuth = ()=>{
        dispatch(getAuthUserData())
    }

    return(
        <div>
            <h1>Авторизация</h1>


            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input value={email} onInput={e=>setEmail(e.target.value)} id="icon_prefix" type="email" className="validate"/>
                                <label htmlFor="icon_prefix">Login</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">lock</i>
                            <input value={password} onInput={e=>setPassword(e.target.value)} id="icon_telephone" type="password" className="validate"/>
                                <label htmlFor="icon_telephone">Password</label>
                        </div>
                    </div>

                </form>
                <button onClick={onLogin} className="btn waves-effect waves-light" >Войти
                    <i className="material-icons right">send</i>
                </button>
                <NavLink to="/registration"><button className="btn "> Регистрация
                    <i className="material-icons right">contact_mail</i></button> </NavLink>

                <NavLink to="/login"><button className="btn " onClick={onIsAuth}> isAuth?
                    <i className="material-icons right">contact_mail</i></button> </NavLink>
            </div>


        </div>
    )
}