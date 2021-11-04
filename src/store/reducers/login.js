const initialState = {
    user :{}
}

//로그인 리듀서 설정 

const LoginReducer = (state = initialState, action ) => {

    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state,
                user: {
                    ...state.user,
                    name : action.data.name
                }
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