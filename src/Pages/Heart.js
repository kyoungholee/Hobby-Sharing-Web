import React, {useState} from 'react';
import './Heart.css';
import {HeartOutlined, HeartFilled} from "@ant-design/icons";

function Heart() {

    const [checked , setChecked] = useState(false);

    const toggle = () => { 
        setChecked(!checked)
    }

    return (
        <>
            <div className ="heart">
            {checked ?
                <HeartFilled className = "heart-btn" onClick = {toggle}/>:
                <HeartOutlined className = "heart-btn" onClick = {toggle}/>
            }
            </div>
        </>
    )
}

export default Heart
