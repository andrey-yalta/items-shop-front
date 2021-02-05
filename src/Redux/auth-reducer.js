import { authAPI} from "../API/api";

// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            debugger;
            return {
                ...state,

                ...action.payload,

            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth)=> ({type: SET_AUTH_DATA, payload:{ userId, email, login, isAuth}  });

export const loginActionCreator = (email, password, rememberMe = true) => async(dispatch) => {
    // debugger;
    let response = await authAPI.login(email, password, rememberMe);

    if (response === "OK") {
        //success, get auth data
        alert("успехы")
        dispatch(getAuthUserData())


    }
    else{

        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        console.log(response)
    }
}

export const logoutActionCreator = () => async(dispatch) => {
    // debugger;
    let response = await authAPI.logout();

    if (response === "OK") {
        //success, get auth data
        alert("успех")
        dispatch(setAuthUserData(null,null,null,false))

    }
    else{

        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        console.log(response)
    }
}

export const registrationActionCreator = (email, password,repeat, name) => async(dispatch) => {
    // debugger;
    let response = await authAPI.registration(email, password,repeat, name);
    if (response  === "Created") {
        //success, get auth data
        // dispatch(setAuthUserData())
        alert("Зарегистрировано")
    }
    else if(response === "Already Reported") {
        //success, get auth data
        // dispatch(setAuthUserData())
        alert("Пользователь уже существует")
    }
    else{

        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";

    }
}

export const getAuthUserData = () => async(dispatch) => {
    debugger;
    let response = await authAPI.me();

    if (response.status === 200) {
        //success, get auth data
        // alert("успехы")

        dispatch(setAuthUserData(response.data._id,response.data.email,response.data.name,true))

    }
    else if(response.status === 401){
        // переделать
        alert("not authirozed")
    }
    else{
        debugger;
        // let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        console.log(response)
    }
}