import React from 'react';
import dummy from "../DB/Summer.json";
import "./SmList.css";
import {useParams} from "react-router-dom";

function SmList() {

const { id } = useParams();
const night = dummy.summber.filter(list => list.id === id )
    return (

        <>
            <div className = "night">

            <ul>
            {night.map(list => (
                <li key = {list.id}>


                    <img src = {list.image} alt = {list.name} className = "product" width = "200px" height = "280px"/>
                    <div className = "letter">
                        
                        <strong>{list.name}</strong>
                        <br />
                        <strong className = "price">{list.price}</strong>
                        <br />
                        <strong>{list.explanation}</strong>
                    </div>

                    <button style = {{color : 'red'}} className = "cke">신청하기</button>

                </li>
            ))}
            </ul>
            </div>
        </>
    )
}

export default SmList;
