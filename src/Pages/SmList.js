import React from 'react';
import dummy from "../DB/Summer.json";
import "./SmOutSideList.css";
import {useParams} from "react-router-dom";

function SmList() {

const { id } = useParams();
const night = dummy.summber.filter(list => list.id === id )
    return (

        <>
            <div>

            <ul>
            {night.map(list => (
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

export default SmList;
