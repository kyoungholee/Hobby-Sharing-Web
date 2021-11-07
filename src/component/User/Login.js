import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Login.css';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/actions/login';
import { useHistory } from 'react-router';

function Login(props) {
    

    const dispatch = useDispatch();
    const history = useHistory();

    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");



    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])




    // 클릭을 했을때 액션과 dispatch가 reducer로 가서 스토어 안에 있는
    // 데이터들을 보여준다. 

const handleEmail = (e) => {
    setEmail(e.currentTarget.value)
}
const handlePassword = (e) => {
    setPassword(e.currentTarget.value)
}


const handleOnSubmit = (e) => {
    e.preventDefault();


    let body = {
        email : email,
        password : password
        
    }
    
    //서버 통신으로 dispatch랑 redux를 넣어준다. 

    dispatch(loginAction(body))
    .then (res => {
        if(res.payload.loginSuccess) {
            props.history.push('/')
        } else {
            alert("Error")
        }
    })
    
        history.push('/')
}


const handleLogin = () => {
    if (!email) {
        alert("이메일을 적어주세요 ~ ");
        return
    }

}
console.log('email', email)




    return (
        <>
            <div className ="Login">

                <form onSubmit = {handleOnSubmit}>

                <label>이메일</label>
                <input type = "email" value = {email} onChange = {handleEmail} />

                <label>비밀번호</label>
                <input type = "password" value = {password} onChange = {handlePassword} />


                <button onClick = {handleLogin}>로그인</button>
                </form>


            </div>
        </>
    )
}

export default Login;
