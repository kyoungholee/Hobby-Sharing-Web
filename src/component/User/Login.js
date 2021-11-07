import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Login.css';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/actions/login';
import { useHistory } from 'react-router';

function Login() {
    

    const dispatch = useDispatch();
    const history = useHistory();

    const [name , setName] = useState("");

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])




    // 클릭을 했을때 액션과 dispatch가 reducer로 가서 스토어 안에 있는
    // 데이터들을 보여준다. 

const handleName = (e) => {
    setName(e.target.value)
}



const handleOnSubmit = (e) => {
    e.preventDefault();
}


const handleLogin = () => {
    if (!name) {
        alert("닉네임을 입력해주세요");
        return
    }



//서버 통신으로 dispatch랑 redux를 넣어준다. 

dispatch(
    loginAction({name : name})
    
) 

    history.push('/Home')

}
console.log(setName)




    return (
        <>
            <div className ="Login">
                <form onSubmit = {handleOnSubmit}>

                <label>닉네임</label>
                <input type = "name" value = {name} onChange = {handleName} />

                <button onClick = {handleLogin}>로그인</button>
                </form>
            </div>
        </>
    )
}

export default Login;
