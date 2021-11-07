import axios from "axios";
import {LOGIN} from './types';


export const loginAction = (dataToSubmit) => {

    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data)


    return {
        type : LOGIN,
        payload : request
    }
}

// 로그인 엑션 