import React from 'react'
import dummy from "../DB/Winnter.json";
import "./WnOutSideList.css";
import Like from './Like';


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

                    <div className = "like-btn">
                    <Like like = {Like}  key = {list.id}/>
                    </div>

                        <div className = "discount">
                            <p>{list.discount}</p>
                            <p className = "price">{list.price}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default WnOutSideList;
