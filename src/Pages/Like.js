import React, {useState} from 'react'

function Like( {Like}) {
    const [isShow, setIsShow] = useState(0);

    const toggleShow =  () => {
        setIsShow(isShow + 1)
    }
    
    return (
        <div>

            <div className = "btn-like">
                <button onClick = {toggleShow}>👍{isShow}</button>
            </div>
            
        </div>
    )
}

export default Like;
