import React from 'react'
import dummy from "../DB/Winnter.json";
import "./WnOutSideList.css";

function WnOutSideList() {
    return (
        <>
            <div className = "winterList">
                <ul>
                {dummy.Winnter.map(list => (
                    <li key = {list.id}>
                    <div className = "images">
                    <img src = {list.image} alt = {list.name} width = "250x" height = "300px"/>
                    </div>

                        <div className = "name"> {list.name} </div>
                    <div className = "explan">{list.explanation}</div>
                    <div className = "price">{list.price}</div>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default WnOutSideList;
