import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom';
import LogoImg from '../logo/Run.JPG';
import searchImg from '../logo/search.JPG';

function Header() {

    const history = useHistory;

    const goToLogin  = () => {
        history.push('/Login')
    }
    const goToSign  = () => {
        history.push('/Sign')
    }
    
    const goToCenter  = () => {
        history.push('/Center')
    }

    return (
        <>
            <div className = "header">
                    <img src = {LogoImg} width = "140px" height = "60px"/>
                    <div className="search">
                        <input type ="text" placeholder = "원하는 취미를 검색해보세요. "/>
                        <img src = {searchImg} className = "bar_check" />
                    </div>
                    <div>
                        <ul className = "information">
                            <li onClick = {goToSign}>회원가입</li>
                            <li onClick = {goToLogin}>로그인</li>
                            <li onClick = {goToCenter}>고객센터</li>
                        </ul>
                    </div> 
                </div>
        </>
    )
}

export default Header;
