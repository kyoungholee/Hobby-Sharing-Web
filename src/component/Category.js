import React from 'react'
import './Category.css';
import {useHistory} from 'react-router-dom';
import DownImg from '../logo/angle_down.JPG';

function Category() {

    const history = useHistory();

    const goTOEvent = () => {
        history.push('/Event')
    }
    const goTOPopularity = () => {
        history.push('/Popularity')
    }

    return (
        <>
            <div className = "category">
                <ul>
                    <li>전체카테고리
                    <img src = {DownImg}  width = "14px" height = "12px"
                    className = "Arrow_name"
                    />
                    </li>
                    <li onClick = {goTOPopularity} className = "Popularity">
                    인기 목록</li>
                    <li>바로 등록</li>
                    <li>할인 품목</li>
                    <li>월별 가입 혜택</li>
                    <li>새로운 취미</li>
                    <li onClick = {goTOEvent}>이벤트</li>
                </ul>
            </div>
        </>
    )
}

export default Category;
