import React from "react"
import {useDispatch} from "react-redux";
import {registrationActionCreator} from "../../Redux/auth-reducer";

export const Registration =()=>{

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirm, setConfirm] = React.useState("");
    const dispatch = useDispatch();
    const onLogin =()=>{
        // debugger
        if (password === confirm){
            dispatch(registrationActionCreator(email,password,true, name))
            // alert("отправлено")
        }
        else {
            alert("пароли не совпадают")
        }

    }
    return(
        <div>
            <h1>Регистрация</h1>


            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input value={email} onInput={e=>setEmail(e.target.value)} id="icon_prefix" type="email" className="validate"/>
                            <label htmlFor="icon_prefix">Login</label>
                        </div>

                        <div className="input-field col s6">
                            <i className="material-icons prefix">face</i>
                            <input value={name} onInput={e=>setName(e.target.value)} id="icon_prefix2" type="text" className="validate"/>
                            <label htmlFor="icon_prefix2">Name</label>
                        </div>

                        <div className="input-field col s6">
                            <i className="material-icons prefix">lock</i>
                            <input value={password} onInput={e=>setPassword(e.target.value)} id="icon_telephone" type="password" className="validate"/>
                            <label htmlFor="icon_telephone">Password</label>
                        </div>

                        <div className="input-field col s6">
                            <i className="material-icons prefix">lock</i>
                            <input value={confirm} onInput={e=>setConfirm(e.target.value)} id="icon_telephone2" type="password" className="validate"/>
                            <label htmlFor="icon_telephone2">Password again</label>
                        </div>


                    </div>

                </form>
                <button onClick={onLogin} className="btn waves-effect waves-light" >Зарегистрироваться
                    <i className="material-icons right">send</i>
                </button>

            </div>


        </div>
    )
}