import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoImg from '../logo/Run.JPG';
import searchImg from '../logo/search.JPG';
import axios from 'axios';

function Header(props) {

    // const history = useHistory;

    // const goToLogin  = () => {
    //     history.push('/Login')
    // }
    // const goToSign  = () => {
    //     history.push('/Sign')
    // }
    
    // const goToCenter  = () => {
    //     history.push('/Center')
    // }

    // const onClickHandler = () => {
    //     axios.get('/api/user/logout')
    //     .then(res => {
    //         if(res.data.success) {
    //             props.history.push("/login")
    //         } else {
    //             alert ('로그아웃을 실패 했습니다. ')
    //         }
    //     })
    // }

    return (
        <>
            <div className = "header">
                    <Link to = "/">
                    <img src = {LogoImg} width = "140px" height = "60px"/>
                    </Link>
                    <div className="search">
                        <input type ="text" placeholder = "원하는 취미를 검색해보세요. "/>
                        <img src = {searchImg} className = "bar_check" />
                    </div>
                    <div className = "information">
                            <Link to = "/Sign">회원가입</Link>
                            <Link to = "/Login" >로그인</Link>
                            <Link to = "/Center">고객센터</Link>
                    </div>
            </div>
        </>
    )
}

export default Header;
