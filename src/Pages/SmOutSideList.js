import React from 'react'
import './SmOutSideList.css';
import dummy from "../DB/Summer.json";

function SmOutSideList() {
    return (
        <>    
            <div className = "outsideList">
                <ul>
                    {dummy.summber.map(list => (
                        <li key = {list.id}>
                        <img src = {list.image} alt = {list.name} width = "260px" height = "340px"/>

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

export default SmOutSideList
