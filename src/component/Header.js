import React from 'react';
import './Header.css';
import {Route, Link} from 'react-router-dom';
import LogoImg from '../logo/Run.JPG';

function Header() {
    return (
        <>
            <div className = "header">
                    <img src = {LogoImg} width = "140px" height = "60px"/>
                    <div className="search">
                        <input type ="text" placeholder = "원하는 취미를 검색해보세요. "/>
                    </div>
                    <div>
                        <ul className = "information">
                            <li Link to ="/">회원가입</li>
                            <li Link to ="/">로그인</li>
                            <li Link to ="/">고객센터</li>
                        </ul>
                    </div> 
                </div>
        </>
    )
}

export default Header;
