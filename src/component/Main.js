import React from 'react'
import './Main.css'
import SmOutSideList from '../Pages/SmOutSideList';
import WnOutSideList from '../Pages/WnOutSideList';

function Main() {
    return (
    <>    
        <div className = "Main">

            <h1 className = "summber_title">여름 특가!! 여름에 추천하는 취미</h1>
                <SmOutSideList />
            <h1 className = "winnter-title"> 겨울 특가!! 겨울에 추천하는 취미</h1>
                <WnOutSideList />
        </div>
    </>    
    )
}

export default Main;