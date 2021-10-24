import React, { useState }  from 'react'
import './SmOutSideList.css';
import dummy from "../DB/Summer.json";


function SmOutSideList() {

    const [number, setNumber] = useState(0);
    
    const onIncrease = () => {
        setNumber(number + 1);
    }


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
                        <div className = "explan">{list.explanation}
                            <button onClick = {onIncrease}>👍{number}</button>
                        </div>
                        <div className = "price">{list.price}</div>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SmOutSideList
