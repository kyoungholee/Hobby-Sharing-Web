import React from 'react';
import dummy from "../DB/Winnter.json";
import "./WnOutSideList.css";
import {useParams} from "react-router-dom";

function WnList() {

    
const { id } = useParams();
const productList = dummy.Winnter.filter(list => list.id === id)

    return (

        <>
            <div>

            <ul>
            {productList.map(list => (
                <li key = {list.id}>

                    <div >{list.name} </div>
                    <div>{list.explanation}</div>

                </li>
            ))}
            </ul>
            </div>
        </>
    )
}

export default WnList
