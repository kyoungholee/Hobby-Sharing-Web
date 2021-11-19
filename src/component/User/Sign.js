import React, {useState} from 'react'
import './Sign.css';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import {registerUser} from "../../store/actions/login";


function Sign() {
 
    const dispatch = useDispatch();
    const history = useHistory();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Name, setName] = useState("");

    

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }
    const onConfirmPasswordHandler  = (e) => {
        setConfirmPassword(e.target.value)
    }
    const onNameHandler = (e) => {
        setName(e.target.value)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert("비밀번호가 같아야 합니다.!!")
        }

        let body = {
            email : Email,
            name : Name,
            password : Password
        }

        dispatch(registerUser(body))
         .then(res => {
            if(res.payload.success) {
               history.push("/login")
            } else {
                alert("Error")
            }
        })
    }


    return (
        <>    
            <div className ="Sign">
                <form onSubmit = {onSubmitHandler}>
                    <label>이메일</label>
                    <input type = "email" value = {Email} onChange = {onEmailHandler}/>

                    <label>이름은</label>
                    <input type = "text" value = {Name} onChange = {onNameHandler} />

                    <label>비밀번호</label>
                    <input type = "password" value = {Password} onChange = {onPasswordHandler} />
                    
                    <label>비밀번호 확인</label>
                    <input type = "confirmPassword" value = {ConfirmPassword} onChange = {onConfirmPasswordHandler} />


                    <button type = "submit">회원가입</button>
                </form>
            </div>
        </>
    )
}

export default Sign;
