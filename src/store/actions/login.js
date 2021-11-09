import axios from "axios";
import {LOGIN} from './types';
import {REGISTER_USER} from './types';


export const loginAction = (dataToSubmit) => {

    const request = axios.post(`/api/user/login`, dataToSubmit)
        .then(response => response.data)


    return {
        type : LOGIN,
        payload : request
    }
}

// 로그인 엑션 


export const registerUser = (dataToSubmit) => {

    const request = axios.post(`/api/user/register`, dataToSubmit)
        .then(response => response.data)


    return {
        type : REGISTER_USER,
        payload : request
    }
}

// 회원가입 엑션 