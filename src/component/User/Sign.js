import React, {useState} from 'react'
import './Sign.css';


function Sign() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    

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
        if(password === confirmPassword) {
            let body = {
                email : email,
                name : name,
                password : password
            };
        }

    }


    return (
        <>    
            <div className ="Sign">
                <form onSubmit = {onSubmitHandler}>
                    <label>이메일</label>
                    <input type = "email" value = {email} onChange = {onEmailHandler}/>

                    <label>비밀번호</label>
                    <input type = "password" value = {password} onChange = {onPasswordHandler} />
                    
                    <label>비밀번호 확인</label>
                    <input type = "confirmPassword" value = {confirmPassword} onChange = {onConfirmPasswordHandler} />

                    <label>이름은</label>
                    <input type = "name" value = {name} onChange = {onNameHandler} />

                    <button type = "submit">회원가입</button>
                </form>
            </div>
        </>
    )
}

export default Sign;
