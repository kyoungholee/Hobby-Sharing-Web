import {LOGIN, REGISTER_USER} from '../actions/types';

// const initialState = {
//     user :{}
// }

//로그인 리듀서 설정 

const LoginReducer = (state = {}, action ) => {

    switch(action.type) {
        case LOGIN: {
            return {
                ...state, loginSuccess : action.payload
            }
        }
        case REGISTER_USER: {
            return {
                ...state, register : action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default LoginReducer;