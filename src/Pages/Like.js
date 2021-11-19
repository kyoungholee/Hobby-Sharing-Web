import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Like({Like}) {
    const [isShow, setIsShow] = useState(0);

    const toggleShow =  () => {
        setIsShow(isShow + 1)
    }

    const variable = { }
    
    // if(video) {
    //     variable = {video , userId}
    // } else {
    //     variable = {CommentId, userId }
    // }

    useEffect(() => {
        axios.post('/api/like/getLikes', variable)
        .then(res => {
            if(res.data.success) {

                setIsShow(res.data.likes.length)

            } else{
                alert('Likes에 정보를 가져오지 못했습니다. ')
            }
        })
    }, [])
    
    return (
        <div>

            <div className = "btn-like">
                <button onClick = {toggleShow}>👍{isShow}</button>
            </div>
            
        </div>
    )
}

export default Like;
