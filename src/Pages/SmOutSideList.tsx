import React, {useState} from 'react'
import './SmOutSideList.css';
import dummy from "../DB/Summer.json";
import Like from './Like';
import Heart from './Heart';


interface IProps {
    summber :ISummber

}

interface ISummber {
    "id" : number,
    "name" : string,
    "explanation" : string,
    "image" : HTMLImageElement,
    "price" : string ,
    "discount" : string,
    "Like" : string,
    "Heart" : string;

}

function SmOutSideList( {summber}: IProps) {
    
    

    return (
        <>    
            <div className = "outsideList">
                <ul>
                    {dummy.summber.map(list => (
                        <li key = {list.id}>
                        <div className = "images">
                        <img src = {list.image} alt = {list.name} width = "260px" height = "340px"/>
                        </div>
                            <div className = "name"> {list.name} </div>
                        <div className = "explan">{list.explanation}</div>

                        <div className = "like-btn">
                        <Like Like = {Like}  key = {list.id}/>
                        </div>

                        <div className = "discount">
                        <p>{list.discount}</p>
                        <p className = "price">{list.price}</p>
                        </div>

                        <div>
                        <Heart Heart = { Heart} /> 
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SmOutSideList
